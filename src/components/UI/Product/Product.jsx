import { motion } from 'framer-motion'
import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Product({item}) {
  return (
    <div >
         <div className="cover">
              <motion.img whileHover={{scale:.9}} src={item.imgUrl} alt="" />    

         </div>
         <div className='product_information'>
              <h3 className="title py-2">
                  <Link to={`/shop/${item.id}`}>
                      {item.productName}
                </Link>
              </h3>
              <span className="categroy text-gray-600">{item.category}</span>
              <div className='flex justify-between items-center py-3'>
                  <span>{item.price*100} R</span>
                  <motion.button whileHover={{scale:1.1}}>
                      <AiFillPlusCircle  className='text-2xl' />
                  </motion.button>
              </div>
         </div>
    </div>
  )
}

export default Product
Product