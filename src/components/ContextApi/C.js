import React from "react";
import { UserConsumer } from "./UserContext";

const A = () => {
  return (
    <div>
      <UserConsumer>
        {(name) => {
          return <h2>hello {name}</h2>;
        }}
      </UserConsumer>
    </div>
  );
};

export default A;
