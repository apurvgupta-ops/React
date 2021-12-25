import React from "react";

const Event = () => {
  const btnClicked = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default Event;
