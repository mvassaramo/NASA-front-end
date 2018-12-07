import React from "react";

import Asset from "../../components/asset";

class Gallery extends React.Component {

 

  render() {
    return (
      <React.Fragment>
        <br />

        <div className="gallery-container">
          {this.props.assets.length > 0 ? (
            this.props.assets.map(asset =>
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
