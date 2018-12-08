import React from "react";

import Asset from "../../components/asset";
import Search from "../../components/search";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search
          updateSearchQuery={this.props.updateSearchQuery}
          getAssets={this.props.getAssets}
          enterPressed={this.props.enterPressed}
        />

        <div className="gallery-container">
          {this.props.assets.length > 0 ? (
            this.props.assets.map(asset => <Asset asset={asset} />)
          ) : (
            <p>no results found</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
