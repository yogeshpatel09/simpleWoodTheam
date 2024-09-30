import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Account from './Account'
import DashBoard from './components/DashBoard'
import SoppingCart from './components/SoppingCart'
import Catalog from './components/Catalog'
import ProductCollection from './components/ProductCollection'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Catalog' element={<Catalog />}/>
        <Route path='/ProductCollection' element={<ProductCollection />}/>
        <Route path='/Account' element={<Account />}/>
        <Route path='/SoppingCart' element={<SoppingCart/>}/>
        <Route path='/DashBoard' element={<DashBoard />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
