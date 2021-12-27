import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((ps) => ps + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(interval.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default Timer;

//FOCUS ON INPUT ELEMENT BY USEREF
// import React, { useRef, useEffect } from "react";

// const Timer = () => {
//   const inputRef = useRef();

//   //   useEffect(() => {
//   //     inputRef.current.focus();
//   //   });

//   const eventhandler = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//       <input ref={inputRef} placeholder="enter text" />
//       <button onClick={eventhandler}>focus me</button>
//     </div>
//   );
// };

// export default Timer;
