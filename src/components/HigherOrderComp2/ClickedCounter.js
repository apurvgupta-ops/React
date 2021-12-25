import React, { Component } from "react";
import Hoc from "./Hoc";

class ClickedCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default Hoc(ClickedCounter);
