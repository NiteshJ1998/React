import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(false);

  function handleClick() {
    if (!login) {
      setLogin(true);
    }
  }

  function handleLogout() {
    debugger;
    if (login) {
      setLogin(false);
    }
  }
  return (
    <div>
      <h2>{login ? "user is logged in" : "user is not login"}</h2>
      <button onClick={handleClick}>Login </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
