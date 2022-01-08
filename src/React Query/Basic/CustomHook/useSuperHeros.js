import { useQuery } from "react-query";
import axios from "axios";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superhero");
};
export const useSuperHeros = (onSuccess, onError) => {
  return useQuery("superheros", fetchHeros, {
    onSuccess,
    onError,
    // enabled: false,
    // select: (data) => {
    //   const superHeronames = data.data.map((heros) => heros.name);
    //   return superHeronames;
    // },
  });
};
export default useSuperHeros;
