import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="app components" />
      {/* <Card name="nitesh">
        <h1>hi there </h1>
        <h2>nitesh here </h2>
      </Card>
      <Card name="i am also a children">
        <h2>i am children here</h2>
        {/* but this children overwrite above */}
      {/* </Card>  */}
    </div>
  );
}

export default App;
