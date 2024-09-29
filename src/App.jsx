import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Account from './Account'
import DashBoard from './components/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<DashBoard />}/>

        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
