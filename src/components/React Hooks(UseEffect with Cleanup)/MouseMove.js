import React, { useState, useEffect } from "react";

const MouseMove = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMouse = (e) => {
    console.log("mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Called");
    window.addEventListener("mousemove", logMouse);

    //CleanUp function
    return () => {
      console.log("unmounting called");
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);

  return (
    <div>
      X-{x} y-{y}
    </div>
  );
};

export default MouseMove;
