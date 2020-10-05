import React from "react";
import Header from "./Header"
// import PropTypes from "prop-types";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Hello World! This is ChitChat!</h1>
      </React.Fragment>
    );
  }
}

export default SiteControl