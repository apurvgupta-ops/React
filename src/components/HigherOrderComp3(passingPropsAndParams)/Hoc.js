import React from "react";

const Hoc = (OriginalComponent, incrementBy) => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    eventHandler = () => {
      this.setState((ps) => {
        return {
          count: ps.count + incrementBy,
        };
      });
    };
    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          eventHandler={this.eventHandler}
          {...this.props}
        />
      );
    }
  }
  return newComponent;
};

export default Hoc;
