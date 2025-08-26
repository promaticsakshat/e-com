
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

function MainLayout() {
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

export default MainLayout
