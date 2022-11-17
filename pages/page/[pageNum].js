import { useRouter } from 'next/router';
import Head from 'next/head'
import {Categories, PostCard, PostWidget,Loader} from '../../components'
import {getPostsByPage,getPostsCount,getPosts} from '../../services'
import {FeaturedPosts} from '../../sections'
import {useState,useEffect} from 'react'
export default function Home({posts}) {
    const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>TaiShow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post,index)=>(
            <PostCard post={post.node} key={index}/>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps({ params }) {
    
    let pageNum=parseInt(params.pageNum);
    const posts = await getPostsByPage((pageNum-1)*3);
    //console.log("testing",typeof params.pageNum);
    return {
      props: { posts },
      revalidate: 60
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const pageSize = await getPostsCount();
    const paths = Array(pageSize).fill(0).map((_, i) => {
        //console.log(i);
        return{
            params:{
                pageNum: i.toString()
            }
        }
     } );
    return {
      paths,
      fallback: true,
    };
  }