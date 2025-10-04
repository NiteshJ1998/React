import React, { useContext } from "react";
import { ThemeContext } from "../App";

function ChildC() {
  //   const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleClick() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }
  return (
    <div>
      <button onClick={toggleClick}>Change Theme</button>
    </div>
  );
}

export default ChildC;
