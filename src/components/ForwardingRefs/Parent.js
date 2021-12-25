import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = React.createRef();
  }

  //   componentDidMount() {
  //     this.inputRefs.current.focus();
  //   }

  eventHandler = () => {
    this.inputRefs.current.focus();
  };
  render() {
    return (
      <div>
        <Child ref={this.inputRefs} />
        {/* <input type="text" ref={this.inputRefs} /> */}
        <button onClick={this.eventHandler}>Focus Me</button>
      </div>
    );
  }
}

export default Parent;
