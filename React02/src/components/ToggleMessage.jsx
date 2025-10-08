import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  function handleToggle() {
    
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleToggle}>Toggle Button</button>
      {show && <p>Hello I am visible now</p>}
    </div>
  );
}
export default ToggleMessage;
