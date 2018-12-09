import React from "react";

import "./home.css";
import Search from "../../components/search";

import homepageBackground from "../../components/images/homepage_background.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search
          updateSearchQuery={this.props.updateSearchQuery}
          getAssets={this.props.getAssets}
          enterPressed={this.props.enterPressed}
        />
        <img
          src={homepageBackground}
          alt="galaxy background"
          className="homepage-background"
        />
      </React.Fragment>
    );
  }
}

export default Home;
