import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: 0,
    };
  }

  eventHandler = () => {
    this.setState((prevstate) => {
      return {
        hover: prevstate.hover + 1,
      };
    });
  };

  render() {
    const { hover } = this.state;
    return (
      <div>
        {/* <button onMouseOver={this.eventHandler}>Hover {hover} Times</button> */}
        <h4 onMouseOver={this.eventHandler}>Hover {hover} Times</h4>
      </div>
    );
  }
}

export default HoverCounter;
