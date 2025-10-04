import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import "./App.css";
// Step 1: create Context
// const UserContext = createContext();
// Step 4: Consumer ke under jaake consume karlo

const ThemeContext = createContext();

function App() {
  // Step 3: pass the value
  // const [user, setUser] = useState({ name: "Nitesh" });

  const [theme, setTheme] = useState("light");
  return (
    // Step 2 Wrap all the Child inside Provider
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>

      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
// export { UserContext };
export { ThemeContext };
