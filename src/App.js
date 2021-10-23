import React from 'react';
import { Route } from 'react-router';
import './App.css';

import Homepage from './pages/homepage/home.component';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
