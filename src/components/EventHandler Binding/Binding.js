import React, { Component } from "react";

class Binding extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    // this.btnClick = this.btnClick.bind(this); way 3
  }
  // WAY 1 and 2
  //   btnClick() {
  //     this.setState({
  //       message: "good bye",
  //     });
  //   }

  //way 4
  btnClick = () => {
    this.setState({
      message: "Good bye",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.btnClick.bind(this)}>Click me</button> Way 1   */}
        {/* <button onClick={() => this.btnClick()}>Click me</button>  Way 2 */}
        <button onClick={this.btnClick.bind(this)}>Click me</button> way 3
      </div>
    );
  }
}

export default Binding;
