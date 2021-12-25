import React, { Component } from "react";
import C from "./C";
import Cc from "./Cc";
import Hc from "./Hc";

class App extends Component {
  render() {
    return (
      <div>
        <C>
          {(count, eventHandler) => (
            <Cc count={count} eventHandler={eventHandler} />
          )}
        </C>
        <C>
          {(count, eventHandler) => (
            <Hc count={count} eventHandler={eventHandler} />
          )}
        </C>
      </div>
    );
  }
}

export default App;
