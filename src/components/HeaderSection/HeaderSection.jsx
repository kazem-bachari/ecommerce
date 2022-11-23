import React from 'react'

function HeaderSection({ children }) {
   
  return (
    <div>
    <h2 className='block text-center px-3 py-16 tracking-wider'>
              {children}
    </h2>
    </div>
  )
}

export default HeaderSection
