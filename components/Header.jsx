import React, {userContext,useState,useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
    const [categories,setCategories]= useState([]);
    useEffect(()=>{
        getCategories().then((newCategories)=>setCategories(newCategories));
    },[])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-black py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-black'>
                        TaiShow睇Show
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
            <a href="https://forms.gle/FB19inK2CuNoU16m9"><button className='btn mx-4'>提交活動資訊</button></a>
        </div>
    </div>
  )
}

export default Header