import React, { Component } from "react";
import Hoc from "./Hoc";

class CC extends Component {
  render() {
    const { count, eventHandler } = this.props;
    return (
      <div>
        <button onClick={eventHandler}>
          {this.props.name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default Hoc(CC, 10);
