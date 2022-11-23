import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import {Routes,Route,Navigate} from 'react-router-dom'


const Routers=()=>{
    
    return (
    <Routes>
        <Route element={<Navigate to={"/home"}/>} path="/" exact />
        <Route element={<Home/>} path='/home' />
        <Route element={<Shop/>} path='shop' />
        <Route element={<ProductDetail/>} path='shop/:id' />
        <Route element={<Cart/>} path='cart' />
        <Route element={<Checkout/>} path='checkout' />
        <Route element={<Login/>} path='login' />
        <Route element={<Signup/>} path='signup' />
    </Routes>

    )
}
export default Routers