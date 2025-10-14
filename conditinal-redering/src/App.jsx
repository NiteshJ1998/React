import React, { useState } from "react";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div>{isLoggedIn ? <Logout /> : <Login />}</div>;
  // if (isLoggedIn) {
  //   return <Logout />;
  // } else {
  //   return <Login />;
  // }
}

export default App;
