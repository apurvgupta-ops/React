import React, { Component } from "react";

export class Inputfield extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = React.createRef();
  }

  focusRefs = () => {
    this.inputRefs.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
      </div>
    );
  }
}

export default Inputfield;
