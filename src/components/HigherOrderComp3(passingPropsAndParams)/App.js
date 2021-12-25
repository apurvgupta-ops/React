import React, { Component } from "react";
import CC from "./Cc";
import HC from "./Hc";

class App extends Component {
  render() {
    return (
      <div>
        <CC name="Apurv" />
        <HC name="batman" />
      </div>
    );
  }
}

export default App;
