import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  //   incrementCounter() {
  //     this.setState(
  //       {
  //         counter: this.state.counter + 1,
  //       },
  //       () => {
  //         console.log("CallBack value", this.state.counter);
  //       }
  //     );
  //     console.log(this.state.counter);
  //   }

  incrementCounter() {
    this.setState((prevstate) => ({
      counter: prevstate.counter + 1,
    }));
    console.log(this.state.counter);
  }

  incrementCounterFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button onClick={() => this.incrementCounterFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
