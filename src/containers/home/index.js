import React from "react";

import "./home.css";
import Search from '../../components/search'

import homepageBackground from "../../components/images/homepage_background.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
          <img src={homepageBackground} alt="galaxy background" className="homepage-background" />
          <Search
          updateSearchQuery={this.props.updateSearchQuery}
          getAssets={this.props.getAssets}
          enterPressed={this.props.enterPressed}
        />
      </React.Fragment>
    );
  }
}

export default Home;
