import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const eventHandler1 = () => {
    setCounterOne(counterOne + 1);
  };

  const eventHandler2 = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={eventHandler1}>CountOne - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={eventHandler2}>CountTwo - {counterTwo}</button>
    </div>
  );
};

export default Counter;
