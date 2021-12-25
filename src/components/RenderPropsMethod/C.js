import React, { Component } from "react";

export class C extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  eventHandler = () => {
    this.setState((ps) => {
      return {
        count: ps.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.eventHandler)}
        {this.props.name}
      </div>
    );
  }
}

export default C;
