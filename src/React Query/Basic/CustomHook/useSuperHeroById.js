import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superhero/${heroId}`);
};

export const useSuperHeroById = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchHeros(heroId));
};
