import React from "react";
import Header from "./Header"
import UtilityBar from "./UtilityBar";
import UtilityScreen from "./UtilityScreen";
// import PropTypes from "prop-types";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <UtilityScreen />
        <Header />
        <UtilityBar />
      </React.Fragment>
    );
  }
}

export default SiteControl