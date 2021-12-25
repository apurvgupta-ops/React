import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Parent",
    };
    this.greetmsg = this.greetmsg.bind(this);
  }

  greetmsg(child) {
    alert(`hello from ${this.state.msg} to ${child}`);
  }

  render() {
    return (
      <div>
        <Child eventHandler={this.greetmsg} />
      </div>
    );
  }
}

export default Parent;
