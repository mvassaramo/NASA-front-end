import React from "react";

import "./assetDetails.css";

const AssetDetails = props => {
  const { title, description, media_type } = props.asset.data[0];
  return props.asset ? (
    <div className="assetDetail-wrapper">
      {media_type === "image" ? (
        <img src={props.asset.links[0].href} alt={title} />
      ) : (
        <p>video here</p>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={props.history.goBack}>Take me back</button>
    </div>
  ) : null;
};

export default AssetDetails;


// https://images-assets.nasa.gov/video/50%20Years%20of%20Mars%20Exploration%20/50%20Years%20of%20Mars%20Exploration%20~small.mp4


// https://images-assets.nasa.gov/video/50%20Years%20of%20Mars%20Exploration%20/50%20Years%20of%20Mars%20Exploration%20~small.mp4+~small.mp4



// <video width="320" height="240" controls>
// <source src={`http://images-assets.nasa.gov/video/${title}/${title}~small.mp4`} type="video/mp4"/>
// </video>


// fetch(props.asset.href)
//                 .then(res => res.json())
//                 .then(data => (
//                   <video>
//                     <source src={data[20]} type="video/mp4"/>
//                   </video>
//                 ))