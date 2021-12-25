import React, { Component } from "react";
class Cc extends Component {
  render() {
    const { count, eventHandler } = this.props;
    return (
      <div>
        <button onClick={eventHandler}>CLicked {count} Times</button>
      </div>
    );
  }
}

export default Cc;
