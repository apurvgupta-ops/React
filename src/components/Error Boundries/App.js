import React, { Component } from "react";
import Hero from "./Hero";
import ErrorBoundry from "./ErrorBoundry";

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
          <Hero heroname="superman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroname="batman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroname="joker" />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
