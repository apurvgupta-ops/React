import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superhero");
};

// One way to do fetching**
// const RQsuperheropage = () => {
//   const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
//     "superheros", ()=>{
//   return axios.get("http://localhost:4000/superhero")
// }
//
//   );

//second Way
const RQsuperheropage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "superheros",
    fetchHeros,
    {
      enabled: false,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQsuperheropage</h2>
      <button onClick={refetch}> Fetch heros</button>
      {data?.data.map((hero) => {
        return <h4 key={hero.name}>{hero.name}</h4>;
      })}
    </div>
  );
};

export default RQsuperheropage;
