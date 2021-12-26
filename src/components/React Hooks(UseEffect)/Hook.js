import React, { useState, useEffect } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Hook;
