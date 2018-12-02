import React, { Component } from "react";
import { Route } from 'react-router-dom'

import "./App.css";
import Home from '../containers/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={Home}/>
      </div>
    );
  }
}

export default App;
