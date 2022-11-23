import React, { useEffect, useRef, useState } from 'react';
import styles from  './Header.module.css';
import {Link, NavLink}from 'react-router-dom';
import IconBadge from '../IconBadg/IconBadge';
import { navbarData } from '../../utils/data/data';
import { isTemplateExpression } from 'typescript';
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import usericon from '../../assets/images/usericon.webp'
import {motion} from 'framer-motion'

export default function Header() {
  const [navbarDisplay, SetNavbarDisplay]=useState("hidden")
  const menu=useRef(null)
  const navitems = navbarData;
  const headerRef=useRef(null)
  const stickyHeader=()=>{
    window.addEventListener("scroll", () => {
      let scroll=200
      if (document.body.scrollTop > scroll || document.documentElement.scrollTop > scroll) {
        headerRef.current.classList.add("md:fixed")
        headerRef.current.classList.add("bg-yellow-100")
        headerRef.current.classList.add("md:shadow-2xl")
}
      else {
        
        headerRef.current.classList.remove("md:fixed")
        headerRef.current.classList.remove("bg-yellow-100")
        headerRef.current.classList.remove("md:shadow-2xl")

      }
    })
  }
  useEffect(()=>{
  stickyHeader()
  },[])
  return (
    <header ref={headerRef} className=' px-5 md:px-20 w-full  transition-all duration-200 bg-white '>
         <nav className='flex justify-between items-center  py-2 '>
      <div className='flex items-center my-5 md:m-auto'>
        <AiOutlineShoppingCart className='text-2xl'/>
        <span className='font-bold ml-2'> Multimart</span>
        </div>
   
       <div style={{zIndex:100}}  className={` ${navbarDisplay} grow  md:flex  flex-col md:flex-row  fixed md:relative right-0  text-center py-20 md:py-0   bg-blackTransparent md:bg-transparent h-full w-full md:h-auto md:w-auto top-0 backdrop-blur-sm   md:text-center md:justify-center gap-3 py-30 `}>
          {navitems.map(navitem=>(
          <NavLink key={navitem.id} className={`capitalize text-white md:text-black`} to={navitem.path}>{navitem.name}</NavLink>
        ))}
       </div>
       <div className='flex flex-row-reverse gap-3 items-center'>
          <button onClick={()=>SetNavbarDisplay("flex")} >
        <AiOutlineMenu />
        </button>
        <motion.img className={styles.userlogo} whileTap={{scale:1.3}} src={usericon} alt="user" />
        <IconBadge path={"/cart"}  Icon={AiOutlineShopping}/>
        <IconBadge  path={"/cart"}  Icon={AiOutlineHeart}/>
       </div>
     </nav>
  </header>
  )

}
