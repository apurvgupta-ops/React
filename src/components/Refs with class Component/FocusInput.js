import React, { Component } from "react";
import Inputfield from "./Inputfield";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRefs = React.createRef();
  }

  eventHandler = () => {
    this.componentRefs.current.focusRefs();
  };

  render() {
    return (
      <div>
        <Inputfield ref={this.componentRefs} />
        <button onClick={this.eventHandler}>focus me</button>
      </div>
    );
  }
}

export default FocusInput;
