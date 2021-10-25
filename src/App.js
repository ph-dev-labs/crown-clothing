import React from 'react';
import { Route } from 'react-router';
import './App.css';

import Homepage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';



function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
