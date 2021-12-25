import React, { useState } from "react";

const Hook = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  const changeHandler = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        name="firstname"
        value={name.firstname}
        // onChange={(event) =>setName({ ...name, firstname: event.target.value })}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastname"
        value={name.lastname}
        // onChange={(event) => setName({ ...name, lastname: event.target.value })}
        onChange={changeHandler}
      />
      <h2>firstname = {name.firstname}</h2>
      <h2>lastname ={name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default Hook;
