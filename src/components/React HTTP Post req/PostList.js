import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(this.state);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostList;
