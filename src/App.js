import React, { Component } from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/shop/shop.component.jsx'

import HomePage from './Pages/homepage/homepage.component.jsx';
class App extends Component {

  

  render(){
    return(
      <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
          </Switch>
      </div>
    );
  }

}

export default App;