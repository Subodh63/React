import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let counter = 15;
  const addValue = () => {
    console.log("value added", Math.random());
    counter = counter + 1;
  };
  return (
    <>
      <h1>Subodh Rajput</h1>
      <h2>Counter value: 5</h2>

      <button onclick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  );
}

export default App;
