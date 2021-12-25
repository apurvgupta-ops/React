import React, { Component } from "react";

export class RegC extends Component {
  render() {
    console.log("reg component");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegC;
