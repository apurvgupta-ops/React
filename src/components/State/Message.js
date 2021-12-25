import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  eventHandler() {
    this.setState({
      message: "Thanks for Subcribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.eventHandler()}>Subcribe</button>
      </div>
    );
  }
}

export default Message;
