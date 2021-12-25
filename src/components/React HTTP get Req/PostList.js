import axios from "axios";
import React, { Component } from "react";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errormsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({ post: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errormsg: err });
      });
  }

  render() {
    const { post, errormsg } = this.state;
    return (
      <div>
        <h1>PostList</h1>
        {post.length
          ? post.map((post) => <h5 key={post.id}>{post.title}</h5>)
          : null}

        {errormsg ? <h1>error retriving data</h1> : null}
      </div>
    );
  }
}

export default PostList;
