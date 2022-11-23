import React from 'react'
import { AiFillWarning } from 'react-icons/ai'
import { footerData } from '../../utils/data/data'
import './Footer.css'
import FooterSections from './Footer/FooterSections'

export default function Footer() {

  return (
  <footer className=' bg-blue-900 pt-16 pb-8'>
   <div className='container px-10 md:px-32'>
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-7 ">
       <FooterSections data={footerData.Multimart} title={"Multimart"}/>
       <FooterSections data={footerData.topCategories} title={"Top Categories"}/>
       <FooterSections data={footerData.usefulLinks} title={"Useful Links"}/>
       <FooterSections data={footerData.Contact} title={"Contact"}/>
    </div>
   <p className='text-gray-400 mt-5 flex items-center gap-2 break-normal'><AiFillWarning/>Copyright 2022 developed by Kazem Bachari.All rights reserved</p>

   </div>
  </footer>
  )
}
