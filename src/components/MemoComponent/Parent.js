import React, { Component } from "react";
import MeMoC from "./MeMoC";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Apurv",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "APpu",
      });
    }, 2000);
  }

  render() {
    console.log("*******Parent Rendering*******");
    return (
      <div>
        Parent Component {this.state.name}
        <MeMoC name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
