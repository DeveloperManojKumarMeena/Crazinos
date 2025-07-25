import React from 'react'
import Navbar from './Navigation/Navbar'
import AppRoutes from './Navigation/AppRoutes'

const App = () => {
  return (
    <div id='app'>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App