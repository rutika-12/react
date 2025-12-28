import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    console.log("value added", counter);
    // counter++;
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("value removed", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>rutikaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addValue}>add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
