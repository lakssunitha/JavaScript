import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="login-card">
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h2>

      <p>
        {isLoggedIn
          ? "You are successfully logged in."
          : "Click the button below to login."}
      </p>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;