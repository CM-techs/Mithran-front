import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Project/Home'
import Topbrands from './Project/Topbrands'
import Products from './Project/Products'
import Boys from './Project/Boys'
import Girls from './Project/Girls'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Project/Navbar'
import Cart from './Project/Cart'
import Order from './Project/Order'

import Billing from './Project/Billing'
import About from './Project/About'
import Account from './Project/Account'
import Register from './Project/Register'
import Contact from './Project/Contact'




function App() {
  
    
  return (
    <>
  
    <Navbar/>
    <Routes>
      <Route path='/Home/:name' element={<Home/>}/>
      <Route path='/top' element={<Topbrands/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/boy' element={<Boys/>}/>
      <Route path='/girl' element={<Girls/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
         <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/order/:id' element={<Order/>}/>
          <Route path='/Billing' element={<Billing/>}/>
          <Route path='/about' element={<About/>}/>
           <Route path='/add-account' element={<Account/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/contact' element={<Contact/>}/>
         
       
    </Routes>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
