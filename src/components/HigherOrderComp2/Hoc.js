import React from "react";
import { PureComponent } from "react/cjs/react.production.min";

const Hoc = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((ps) => {
        return {
          count: ps.count + 1,
        };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }
  return NewComponent;
};

export default Hoc;
