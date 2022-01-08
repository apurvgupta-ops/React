import axios from "axios";
import { useQuery } from "react-query";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superhero");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
export const ParllelQuery = () => {
  const { data: superhero } = useQuery("superheros", fetchHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  //   if (isError) {
  //     return <h1>{error.message}</h1>;
  //   }

  return (
    <div>
      <h2>Super Heros</h2>
      {superhero?.data.map((hero) => {
        return <h3 key={hero.name}>{hero.name}</h3>;
      })}

      <h1>Friends</h1>
      {friends?.data.map((fri) => {
        return <h3 key={fri.id}>{fri.name}</h3>;
      })}
    </div>
  );
};
