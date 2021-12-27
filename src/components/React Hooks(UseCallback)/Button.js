import React from "react";

const Button = ({ eventHandler, children }) => {
  console.log("Rendering Button", children);
  return (
    <div>
      <button onClick={eventHandler}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
