import React from 'react'
import Product from '../Product/Product'

function ProductList({data}) {

  return (
    <div className="container md:mx-auto px-10 md:px-20 my-4">
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-6  '>
             {data.map(item=>(
                <Product key={item.id}  item={item}/>
             ))}
          </div>
    </div>
  )
}

export default ProductList
