import { useParams } from "react-router-dom";
import { useSuperHeroById } from "./CustomHook/useSuperHeroById";

const RQsuperherobyid = () => {
  const { heroId } = useParams();
  const { isError, error, isLoading, data } = useSuperHeroById(heroId);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>{data?.data.sname}</h2>
      <p>{data?.data.name}</p>
    </div>
  );
};

export default RQsuperherobyid;
