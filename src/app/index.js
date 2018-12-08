import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "../containers/home";
import Gallery from "../containers/gallery";
import Header from "../components/header";
import Footer from "../components/footer";
import AssetDetails from "../components/assetDetails";

const API = "https://images-api.nasa.gov";

class App extends Component {
  state = {
    searchQuery: undefined,
    assets: [],
    search: false
  };

  clearSearch = () => this.setState({ search: false });

  enterPressed = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.getAssets();
    } else return null;
  };

  updateSearchQuery = searchQuery => this.setState({ searchQuery });

  getAssets = () => {
    return fetch(`${API}/search?q=${this.state.searchQuery}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ assets: data["collection"]["items"], search: true })
      );
  };

  render() {
    const { assets, search } = this.state;
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props =>
            search ? (
              <Redirect to="/gallery" />
            ) : (
              <Home
                updateSearchQuery={this.updateSearchQuery}
                getAssets={this.getAssets}
                enterPressed={this.enterPressed}
              />
            )
          }
        />
        <Route
          exact
          path="/gallery"
          render={props => (
            <Gallery
              {...props}
              assets={assets}
              updateSearchQuery={this.updateSearchQuery}
              getAssets={this.getAssets}
              enterPressed={this.enterPressed}
            />
          )}
        />
        <Route
          exact
          path="/gallery/:nasa_id"
          render={props => (
            <AssetDetails
              {...props}
              assets={assets}
              asset={assets.find(
                a => a.data[0].nasa_id === props.match.params.nasa_id
              )}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
