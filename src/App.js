import React, { Component } from 'react';
import './App.css';

import HomePage from './Pages/homepage/homepage.component';
class App extends Component {


  render(){
    return(
      <div className ='App'>
      <HomePage/>
      </div>
    )
  };

}

export default App;