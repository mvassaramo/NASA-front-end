import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "../containers/home";
import Header from "../components/header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" render={Home} />
      </div>
    );
  }
}

export default App;
