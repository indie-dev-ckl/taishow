import React, {userContext,useState,useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
    const [categories,setCategories]= useState([]);
    useEffect(()=>{
        getCategories().then((newCategories)=>setCategories(newCategories));
    },[])
  return (
    /*<div className='container mx-auto px-10 mb-8'>
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
    </div>*/
    <div className="navbar bg-base-100 mb-2 bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-opacity-90">
        <li><Link href={"/"}>Home</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Genre
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="bg-base-100 p-1 bg-opacity-90">
          {categories.map((category)=>(
                <li>
                    <Link key={category.slug} href={`/category/${category.slug}` }>  
                            <a className='font-bold'>{category.name}</a>
                    </Link>
                </li>
                ))}
          </ul>
        </li>
        <li><Link href={"/about"}>About</Link></li>
      </ul>
      
    </div>
    <a className="btn btn-ghost normal-case text-xl">TaiShow睇Show</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link href={"/"}>Home</Link></li>
      <li tabIndex={0}>
        <a>
        Genre
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="z-40 p-2 bg-base-100 bg-opacity-95">
            {categories.map((category)=>(
                <li>
                    <Link key={category.slug} href={`/category/${category.slug}` }>  
                            <a className='font-bold'>{category.name}</a>
                    </Link>
                </li>
                ))}
        </ul>
      </li>
      <li><Link href={"/about"}>About</Link></li>
    </ul>
    
  </div>
  <div className="navbar-end">
    <a className="btn" href="https://forms.gle/FB19inK2CuNoU16m9" target="_blank">提交活動資訊</a>
  </div>
</div>
  )
}

export default Header