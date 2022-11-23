import React from 'react'
import Routers from '../routers/Routers'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <Header />
           <div>
                <Routers />
           </div>
            <Footer />
        </>
    )

}
