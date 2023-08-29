import React, { useEffect } from 'react'
import Home from "./pages/Home";
import RootLayout from './pages/RootLayout';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import SingleProduct from './pages/SingleProduct';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { total } from './store/cartSlice';
import Checkout from './components/Checkout';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)
    useEffect(()=>{
        dispatch(total())
    },[cartItems,dispatch])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} /> 
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
