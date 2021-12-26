import React, { useState } from "react";
import MouseMove from "./MouseMove";

const Hook = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MouseMove />}
    </div>
  );
};

export default Hook;
