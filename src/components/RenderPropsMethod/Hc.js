import React, { Component } from "react";
class Hc extends Component {
  render() {
    const { count, eventHandler } = this.props;
    return (
      <div>
        <h2 onMouseOver={eventHandler}>Hovered {count} Times</h2>
      </div>
    );
  }
}

export default Hc;
