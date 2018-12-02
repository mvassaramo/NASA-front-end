import React from "react";

import "./asset.css"

const Asset = props => (
  <div className="asset-card">
    <h3>{props.asset.data[0].title}</h3>
    <img src={props.asset.links[0].href} alt={props.asset.data[0].title} />
  </div>
);

export default Asset;
