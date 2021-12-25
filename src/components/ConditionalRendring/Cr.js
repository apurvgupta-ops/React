import React, { Component } from "react";

class Cr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.isLoggedIn ? "welcome Apurv" : "welcome Guest"}</div>
      </div>
    );
  }
}

export default Cr;
