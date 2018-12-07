import React from "react";


import "./assetDetails.css"

const AssetDetails = props => {
    console.log(props)
     const {title, description} = props.asset.data[0]
  return (props.asset ? 
    <div className="assetDetail-container">
      <p>{title}</p>
      <p>{description}</p>
      <img src={props.asset.links[0].href} alt={title} />
      <button onClick={props.history.goBack}>Take me back</button>
    </div>
   : null);
};

export default AssetDetails;
