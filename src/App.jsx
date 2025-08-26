import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'
import ProductGrid from './components/ProductGrid'
import ProductInfo from './components/ProductInfo'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   // <div className='max-w-7xl mx-auto border min-h-[100vh]'>
  //   //   <Navbar />
  //   //   <Hero />
  //   //   <Categories />
  //   //   <ProductGrid />
  //   //   <ProductInfo />
  //   //   <Footer />

  //   // </div>
   
  // )
    
  return (
    
    <motion.div 
      className='max-w-7xl mx-auto  min-h-[100vh] bg-[#f4f6f6]'
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 1.2
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </motion.div>
  )
}

export default App
