import React, { Component, PureComponent } from "react";
import RegC from "./RegC";
import PureC from "./PureC";

class parent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Apurv",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Apurv",
      });
    }, 2000);
  }

  render() {
    console.log("********parent comp*******");
    return (
      <div>
        parent Component
        <PureC name={this.state.name} />
        <RegC name={this.state.name} />
      </div>
    );
  }
}

export default parent;
