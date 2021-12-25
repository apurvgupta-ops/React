import React, { Component } from "react";
import Hoc from "./Hoc";

class HC extends Component {
  render() {
    const { count, eventHandler } = this.props;
    return (
      <div>
        <h2 onMouseOver={eventHandler}>
          {this.props.name} Hovered {count} Times
        </h2>
      </div>
    );
  }
}

export default Hoc(HC, 20);
