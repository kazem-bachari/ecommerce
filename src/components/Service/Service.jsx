import React from 'react'
import {motion} from 'framer-motion'
function Service({color,title,description,Icon}) {
  return (
    <motion.div whileHover={{scale:1.1}} className={`flex ${color} items-center gap-2 px-1 py-2 rounded-sm`}>
      <div className="logo text-5xl">
         {Icon}
      </div>
      <div className="data">
              <span className="font-bold block py-1 text-sm">{title}</span>
              <p className='text-gray-700 '>{description}</p>
      </div>
    </motion.div>
  )
}

export default Service
