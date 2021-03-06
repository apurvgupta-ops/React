import { Link } from "react-router-dom";
import { useSuperHeros, useAddSuperHero } from "./CustomHook/useSuperHeros";
import { useState } from "react";
import { request } from "./axiosUtils";

// const fetchHeros = () => {
//   return axios.get("http://localhost:4000/superhero");
//  return request({url :"/superhero"})  Axios Interceptor
// };

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
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");

  //SUCCESS AND ERROR CALLBACKS************
  const onSuccess = (data) => {
    console.log("Perform sideeffect on onSuccess", data);
  };

  const onError = (error) => {
    console.log("perform the sideEffect on on Error", error);
  };

  // useCustomHooks Here
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeros(onSuccess, onError);

  const { mutate } = useAddSuperHero();

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  // "superheros",
  // fetchHeros
  // {
  //   // ENABLE IS USED FOR FETCH THE DATA ON BUTTON CLICKED************
  //   // enabled: false,

  //   //POLLING*************
  //   // refetchInterval: 3000,
  //   // refetchIntervalInBackground: true,

  //   onSuccess,
  //   onError,

  //   //DATA TRANSFORMATION**************
  //   select: (data) => {
  //     const superHeronames = data.data.map((heros) => heros.name);
  //     return superHeronames;
  //   },
  // }
  // );

  // console.log({ isLoading, isFetching });

  const eventHandleraddhero = () => {
    console.log({ name, sname });
    const hero = { name, sname };
    mutate(hero);
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQsuperheropage</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={sname} onChange={(e) => setSname(e.target.value)} />
      <button onClick={eventHandleraddhero}>Add Hero</button>
      <div>
        <button onClick={refetch}> Fetch heros</button>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}

        {/* {data.map((heros) => {
        return <div key={heros}>{heros}</div>;
      })} */}
      </div>
    </div>
  );
};

export default RQsuperheropage;
