import React from "react";

function Pannel({ title, children, isActive, onShow }) {
  return (
    <div>
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

export default Pannel;
