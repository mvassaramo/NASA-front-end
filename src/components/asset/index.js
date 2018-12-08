import React from "react";
import { Link } from "react-router-dom";

import "./asset.css";

const Asset = props => {
  const { nasa_id, title, media_type } = props.asset.data[0];
  return (
    <React.Fragment>
      <Link to={`/gallery/${nasa_id}`}>
        <div className="asset-card">
          <h5>{title}</h5>{" "}
          {media_type === "video" ? (
            <p>video render here</p>
          ) : (
            <img src={props.asset.links[0].href} alt={title} />
          )}
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Asset;
