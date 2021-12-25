import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      Description: "",
      Topic: "React",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName = (event) => {
    this.setState({
      UserName: event.target.value,
    });
  };
  handleChangeDescription = (event) => {
    this.setState({
      Description: event.target.value,
    });
  };

  handleChangeTopic = (event) => {
    this.setState({
      Topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.UserName} ${this.state.Description} ${this.state.Topic}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.UserName}
            onChange={this.handleChangeUserName}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            typeof="text"
            value={this.state.Description}
            onChange={this.handleChangeDescription}
          />
        </div>
        <div>
          <select value={this.state.Topic} onChange={this.handleChangeTopic}>
            Topic
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
