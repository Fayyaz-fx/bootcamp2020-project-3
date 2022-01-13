import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Products from './components/Products'
import Shoe from './components/Shoe'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='hero' element={<Hero />} />
      <Route path='producuts' element={<Products />}>
        <Route path=':productId' element={<Shoe />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
