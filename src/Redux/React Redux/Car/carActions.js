import { BUY_CAR } from "./carTypes";

export const buycar = (number) => {
  return {
    type: BUY_CAR,
    payload: number,
  };
};
