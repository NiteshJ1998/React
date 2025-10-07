import { useState } from "react";

function LoginBtn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Login" : "Logout"}
      </button>
      <p>{isLoggedIn ? "Welcome back" : "You need to sign in"}</p>
    </div>
  );
}

export default LoginBtn;
