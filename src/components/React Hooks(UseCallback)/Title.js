import React from "react";

const Title = () => {
  console.log("Rendring Title");
  return <div>UseCallBack Hooks</div>;
};

export default React.memo(Title);
