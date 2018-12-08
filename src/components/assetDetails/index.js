import React from "react";

import "./assetDetails.css";

const AssetDetails = props => {
  const { title, description, media_type } = props.asset.data[0];
  return props.asset ? (
    <div className="assetDetail-wrapper">
      {media_type === "image" ? (
        <img src={props.asset.links[0].href} alt={title} />
      ) : (
        <p>video placeholder</p>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={props.history.goBack}>Take me back</button>
    </div>
  ) : null;
};

export default AssetDetails;
