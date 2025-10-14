import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  return (
    <div>
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      {/* <p>I am inside the parent : {name}</p> */}
    </div>
  );
}

export default App;
