import React from "react";

const List = () => {
  const names = ["Apurv", "Appu", "Babu", "Sankalp"];
  //   const Namelist = names.map((name, index) => (
  //     <h2 key={index}>Hello this is {name}</h2>
  //   ));
  //   return <div>{Namelist}</div>; way 1 in this we apply the map method in a variable and then pass
  return (
    <div>
      {names.map((name, index) => (
        <h2 key={index}>hello this is {name}</h2>
      ))}
    </div>
  );
};

export default List;
