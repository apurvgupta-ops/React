import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  eventHandler = () => {
    this.setState((prevstate) => {
      return {
        count: prevstate.count + 1,
      };
    });
  };

  //   eventHandler = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.eventHandler}>Clicked {count} Times</button>
      </div>
    );
  }
}

export default ClickCounter;
