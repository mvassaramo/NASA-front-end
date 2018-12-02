import React from "react";

import Search from "../../components/search";
import Asset from "../../components/asset";


const API = "https://images-api.nasa.gov";

class Gallery extends React.Component {
  state = {
    searchQuery: undefined,
    assets: []
  };

  enterPressed = (event) => {
    const code = event.keyCode || event.which 
    return code === 13 ? this.getAssets() : null 
  }

  updateSearchQuery = searchQuery => this.setState({ searchQuery });

  getAssets = () => {
    return fetch(`${API}/search?q=${this.state.searchQuery}`)
      .then(res => res.json())
      .then(data => this.setState({ assets: data["collection"]["items"] }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>Gallery!!</h1>
        <Search
          updateSearchQuery={this.updateSearchQuery}
          getAssets={this.getAssets}
          enterPressed={this.enterPressed}
        />
        <div className="gallery-container">
          {this.state.assets.length > 0 ? (
            this.state.assets.map(asset =>
              asset.data[0].media_type === "image" ? (
                <Asset asset={asset} /> 
              ) : null
            )
          ) : (
            <p>no results found</p>
          )}
        </div>

      </React.Fragment>
    );
  }
}

export default Gallery;
