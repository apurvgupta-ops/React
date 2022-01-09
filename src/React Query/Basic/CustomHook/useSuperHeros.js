import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superhero");
};

const addHero = (hero) => {
  return axios.post("http://localhost:4000/superhero", hero);
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

export const useAddSuperHero = () => {
  const queryClient = useQueryClient(); // this automatic update the data without click on fetch hero button
  return useMutation(addHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("superheros"); this takes the extra network request so that it takes time to render

      //Handling Query Mutation (this doest not take any extr netwirk request)
      queryClient.setQueryData("superheros", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
