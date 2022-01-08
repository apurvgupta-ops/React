import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superhero/${heroId}`);
};

export const useSuperHeroById = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], () => fetchHeros(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueriesData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
