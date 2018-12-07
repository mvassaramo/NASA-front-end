import React from "react";

import "./assetDetails.css"

const AssetDetails = props => {
     const {title, description} = props.asset.data[0]
  return (props.asset ? 
    <div className="assetDetail-container">
      <p>{title}</p>
      <p>{description}</p>
      <img src={props.asset.links[0].href} alt={title} />
    </div>
   : null);
};

export default AssetDetails;
