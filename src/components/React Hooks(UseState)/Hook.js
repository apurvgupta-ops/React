import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const eventHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Click {count} Times</button> */}
      <button onClick={eventHandler}>Click {count} Times</button>
    </div>
  );
};

export default Hook;
