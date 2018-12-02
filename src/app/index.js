import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "../containers/home";
import Header from "../components/header";
import Footer from "../components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={Home} />
        <Footer />
      </div>
    );
  }
}

export default App;
