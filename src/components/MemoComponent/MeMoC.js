import React, { Component } from "react";

class MeMoC extends Component {
  render() {
    console.log("Memo Rendring");
    return <div>Memo Component {this.props.name}</div>;
  }
}

export default React.memo(MeMoC);
