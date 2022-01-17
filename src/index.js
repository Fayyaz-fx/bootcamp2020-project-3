import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsList from './components/ProductsList'
import About from './components/About'
import NotFound from './components/NotFound'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Brand from './components/Brand'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<ProductsList />} />
        {/* <Route path='products' element={<ProductsList />}> */}
        {/* <Route index element={<h1>Select a product</h1>} /> */}
        <Route path=':productId' element={<SingleProduct />} />
        {/* </Route> */}
        {/* <Route path=':brand' element={<Brand />} /> */}
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
