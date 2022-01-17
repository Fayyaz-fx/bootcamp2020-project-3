import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

export default App
