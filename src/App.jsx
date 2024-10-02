import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Account from './components/Account'
import DashBoard from './components/DashBoard'
import SoppingCart from './components/SoppingCart'
import Catalog from './components/Catalog'
import ProductCollection from './components/ProductCollection'
import SignIn from './components/SignIn'
import Shop from './components/Shop'
import Sale from './components/sale'


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
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/Sale' element={<Sale/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
