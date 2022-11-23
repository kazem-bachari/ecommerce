import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import heroimage from '../assets/images/hero-img.png'
import Service from '../components/Service/Service'
import { AiFillInfoCircle } from 'react-icons/ai'
import { servicesData } from '../utils/data/data'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import ProductList from '../components/UI/ProductList/ProductList'
import products from '../assets/data/products'
import TimeSections from '../components/UI/TimeSections/TimeSections'
import timesectionImage from '../assets/images/counter-timer-img.png'
export default function Home() {
  document.title = "Home"
  const [data, setData] = useState([])
  useEffect(() => {
    setData(products)
  }, [])
  return (
    <>
      <section className=' bg-blue-200'>
        <div className='container md:mx-auto px-10 flex md:flex-row flex-col py-10 '>
          <div className="md:w-6/12 pt-5">
            <p className='font-bold'>Treding product in 2022</p>
            <h1 className='text-lg md:text-3xl'>Make Your interiro More <br /> Minimalistic & Modern</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut fuga voluptatem blanditiis animi earum voluptate laudantium officia illo nobis?</p>
            <button className='bg-blue-900 px-2  py-1 hover:bg-blue-500 rounded text-xs text-white uppercase'>shop now</button>
          </div>
          <div className="grow">
            <img src={heroimage} className='w-full h-full' alt="" />
          </div>
        </div>
      </section>
      <section className='services grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:p-20 '>
        {servicesData.map(service => (
          <Service key={service.id} title={service.title} description={service.description} color={service.color} Icon={service.icon} />
        ))}
      </section>
      <section className='treading_products '>
        <HeaderSection >Treading Products</HeaderSection>
        <ProductList data={data.filter(item => item.category === "chair")} />
      </section>
      <section className='sales_products '>
        <HeaderSection >Sales Product</HeaderSection>
        <ProductList data={data.filter(item => item.category === "sofa")} />
      </section>
      <div>

      </div>
      <section className='offer  bg-blue-900'>
        <div className='container flex flex-col md:flex-row justify-between mx-auto px-20 py-10'>
          <div>
            <h3 className='text-sm text-white'>Limited Offers</h3>
            <h2 className='text-lg my-2 text-white'>Quality Armchair</h2>
            <TimeSections />
            <Link className="bg-white text-blue-900 px-3 py-2 inline-block rounded my-6 hover:bg-blue-500 hover:text-white" to={"/cart"}>Visit Store</Link>
          </div>
          <div className="offer_image md:w-1/3">
            <img className='w-full h-full' src={timesectionImage} alt="counter time" />
          </div>
        </div>
      </section>
      <section className='new_arrivals '>
        <HeaderSection >New Arrivals</HeaderSection>
        <ProductList data={data.filter(item => item.category === "mobile")} />
      </section>  
      <section className='popular '>
        <HeaderSection >Popular in Category</HeaderSection>
        <ProductList data={data.filter(item => item.category === "wireless")} />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
