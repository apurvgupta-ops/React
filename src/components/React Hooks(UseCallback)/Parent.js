import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(50000);

  const incrementcount = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" value={age} />
      <Button eventHandler={incrementcount}>increment Age</Button>
      <Count text="Salary" value={salary} />
      <Button eventHandler={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default Parent;
