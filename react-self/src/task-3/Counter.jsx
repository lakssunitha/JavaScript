import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "container dark" : "container light"}>
      <div className="card">
        <h1>Counter Application</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </div>
  );
}

export default Counter;