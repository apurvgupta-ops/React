import React, { PureComponent } from "react";
class PureC extends PureComponent {
  render() {
    console.log("Pure omponent");
    return <div>PureComponent {this.props.name}</div>;
  }
}

export default PureC;
