import React, { Component } from "react";
import Hoc from "./Hoc";

class HoverCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hovered {count} Times</h2>
      </div>
    );
  }
}

export default Hoc(HoverCounter);
