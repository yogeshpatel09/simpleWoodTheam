import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import DashBoard from './components/DashBoard';
import SoppingCart from './components/SoppingCart';
import Catalog from './components/Catalog';
import ProductCollection from './components/ProductCollection';
import SignIn from './components/SignIn';
import Shop from './components/Shop';
import Sale from './components/sale';
import SofaCollection from './components/SofaCollection';
import CupboardsCollection from './components/CupboardsCollection';
import BedsmattressesCollection from './components/Beds&mattressesCollection';
import FloorlampsfixturesCollection from './components/Floorlamps&fixturesCollection';
import ShelvingCollection from './components/ShelvingCollection';
import CommodeCollection from './components/CommodeCollection';
import ContextSamjho from './components/ContextSamjho';
import { Pandit } from './context/mandir/mandircontext';

function App() {
  return (
    <Pandit>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path='/ProductCollection' element={<ProductCollection />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/SoppingCart' element={<SoppingCart />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Sale' element={<Sale />} />
          <Route path='/sofasCollection' element={<SofaCollection />} />
          <Route path='/cupboardsCollection' element={<CupboardsCollection />} />
          <Route path='/beds&mattressesCollection' element={<BedsmattressesCollection />} />
          <Route path='/floorlamps&fixturesCollection' element={<FloorlampsfixturesCollection />} />
          <Route path='/commodeCollection' element={<CommodeCollection />} />  {/* Fixed route */}
          <Route path='/shelvingCollection' element={<ShelvingCollection />} />
          <Route path='/contextsamjho' element={<ContextSamjho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Pandit>
  );
}

export default App;
