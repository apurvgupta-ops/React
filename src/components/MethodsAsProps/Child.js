import React from "react";

const child = (props) => {
  return (
    <div>
      <button onClick={() => props.eventHandler("child")}>Greet me</button>
    </div>
  );
};

export default child;
