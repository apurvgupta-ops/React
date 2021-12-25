import React, { Component } from "react";

class Refss extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  eventHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.eventHandler}>Click me</button>
      </div>
    );
  }
}

export default Refss;
