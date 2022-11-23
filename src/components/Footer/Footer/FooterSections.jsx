import React from 'react'
import { Link } from 'react-router-dom'

function FooterSections({ data = [], title }) {

  return (
    <div className=''>
      <h3 className='text-white py-4 text-center md:text-left'>{title}</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.link ?
              <Link className='text-sm text-gray-400 block hover:text-white text-center md:text-left' to={item.link}>{item.text}</Link>
              :
              <p className='text-sm text-gray-400 p-1 text-center md:text-left break-all'>{item.text}</p>
                }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSections
