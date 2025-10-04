import { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// Step 1: create Context
const UserContext = createContext();
// Step 4: Consumer ke under jaake consume karlo

function App() {
  // Step 3: pass the value
  const [user, setUser] = useState({ name: "Nitesh" });
  return (
    // Step 2 Wrap all the Child inside Provider
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext };
