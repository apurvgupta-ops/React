import axios from "axios";
import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [btnclicked, setBtnclicked] = useState(1);

  const eventHandler = () => {
    setBtnclicked(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnclicked}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      });
  }, [btnclicked]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={eventHandler} type="button">
        Data Fetch
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} </li>
        ))}
      </ul> */}
      {posts.title}
    </div>
  );
};

export default DataFetching;
