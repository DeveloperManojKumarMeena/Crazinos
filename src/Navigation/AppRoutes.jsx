import React from 'react'
import { Route, Routes } from "react-router-dom" // react-router-dom से Routes इम्पोर्ट किया गया
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import Projects from '../Pages/Projects'
import About from "../Pages/About"
import Cart from '../Pages/Cart'

// अपने कॉम्पोनेंट का नाम 'AppRoutes' कर दिया है
const AppRoutes = () => {
  return (
    <div>
       {/* यहाँ react-router-dom वाले Routes का उपयोग किया गया है */}
       <Routes >
         <Route path="/" element={<Home/>}/>
         <Route path="/product" element={<Products/>}/>
         <Route path="/service" element={<Projects/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
       </Routes>
    </div>
  )
}

// और इसे AppRoutes के रूप में एक्सपोर्ट किया गया है
export default AppRoutes