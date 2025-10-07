import React from "react";

function FruitsList() {
  const fruits = ["apple", "mango", "pineapple"];

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsList;
