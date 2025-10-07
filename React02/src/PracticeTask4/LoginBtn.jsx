import { useState } from "react";

function LoginBtn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <p>{isLoggedIn ? "Welcome back" : "You need to sign in"}</p>
    </div>
  );
}

export default LoginBtn;
