import axios from "axios";
import { useQueries } from "react-query";

const fetchheros = (heroId) => {
  return axios.get(`http://localhost:4000/superhero/${heroId}`);
};

export const DynamicQueries = ({ heroIds }) => {
  const queryresult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["superhero", id],
        queryFn: () => fetchheros(id),
      };
    })
  );

  console.log({ queryresult });

  return <div>Dynamic query</div>;
};
