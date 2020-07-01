import React from 'react';
import Navbar from './Navbar'
import Main from './Main'
import { Switch, Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

import './App.css';


function App() {
  return (
    <div className="App ui container">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/add' component={AddProduct} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
