import React, { useContext } from "react";
import B from "./B";
import { emailContext, nameContext } from "./App";

const C = () => {
  const name = useContext(nameContext);
  const email = useContext(emailContext);
  return (
    <div>
      components c {name} - {email}
    </div>
  );
};

export default C;
