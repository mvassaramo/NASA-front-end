import React from "react";
import { Link } from "react-router-dom";

import "./asset.css";

class Asset extends React.Component {
  state = {
    videoLink: undefined
  };

  fetchVideo = () => {
    return fetch(this.props.asset.href)
      .then(res => res.json())
      .then(url => this.setState({ videoLink: url[20] }));
  };

  componentDidMount() {
    this.fetchVideo();
  }

  render() {
    const { nasa_id, title, media_type } = this.props.asset.data[0];
    return (
      <React.Fragment>
        <Link to={`/gallery/${nasa_id}`}>
          <div className="asset-card">
            <h5>{title}</h5>
            {media_type === "video" ? (
              <video width="200" height="150" controls>
                <source src={this.state.videoLink} type="video/mp4" />
              </video>
            ) : (
              <img src={this.props.asset.links[0].href} alt={title} />
            )}
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Asset;

// <video><source src="https://images-assets.nasa.gov/video/50%20Years%20of%20Mars%20Exploration%20/50%20Years%20of%20Mars%20Exploration%20~small.mp4" >
//               </source></video>

// fetch(this.props.asset.href)
//                 .then(res => res.json())
//                 .then(data => (
//                   <video>
//                     <source src={data[20]} type="video/mp4"/>
//                   </video>
//                 ))
