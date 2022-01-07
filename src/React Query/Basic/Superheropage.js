import axios from "axios";
import React, { useState, useEffect } from "react";

const Superheropage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/superhero")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // const eventHandler = (e) => {
  //   e.preventDefault();
  //   setData(data);
  // };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div>
      <h1>SuperHero List</h1>
      {/* <button onClick={eventHandler}>Fetch heros</button> */}
      {/* <h2>{data.name}</h2> */}
      {data.map((data) => {
        return <h2 key={data.name}>{data.name}</h2>;
      })}
    </div>
  );
};

export default Superheropage;
