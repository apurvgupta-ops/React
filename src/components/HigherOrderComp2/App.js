import React, { Component } from "react";
import ClickedCounter from "./ClickedCounter";
import HoverCounter from "./HoverCounter";

class App extends Component {
  render() {
    return (
      <div>
        <ClickedCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
