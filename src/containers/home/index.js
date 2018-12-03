import React from "react";

import "./home.css";

import homepageBackground from "../../components/images/homepage_background.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
          <img src={homepageBackground} alt="galaxy background" className="homepage-background" />
      </React.Fragment>
    );
  }
}

export default Home;
