import React, { useState } from "react";

const Hooks = () => {
  const [items, setItems] = useState([]);

  const additem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
    // console.log(items);
  };
  return (
    <div>
      <button onClick={additem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hooks;
