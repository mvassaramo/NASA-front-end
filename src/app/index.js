import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "../containers/home";
import Gallery from "../containers/gallery";

import Header from "../components/header";
import Footer from "../components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/gallery" render={props => <Gallery {...props} />} />

        <Footer />
      </div>
    );
  }
}

export default App;
