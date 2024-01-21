import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function App() {
  const [steps, useSteps] = useState(1);
  const [count, useCount] = useState(0);

  function decreaseSteps() {
    return useSteps((s) => s - 1);
  }

  function increaseSteps() {
    return useSteps((s) => s + 1);
  }

  function getCount() {
    return useCount((s) => s + steps);
  }

  function getString(count) {
    if (count < 0) return `${count} days from now was `;
    if (count > 0) return `${count} days from now is `;
    return "Today is ";
  }

  function getDesiredDate() {
    let date = new Date();
    date.setDate(date.getDate() + count);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="App">
      <div className="container">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => useSteps(Number(e.target.value))}
        />{" "}
        Steps: {steps}
        {/* <button className="decrease" onClick={decreaseSteps}>
          -
        </button>
        <p>Steps {steps === 0 ? "" : steps}</p>
        <button className="increase" onClick={increaseSteps}>
          +
        </button> */}
      </div>

      <div className="container">
        <button className="decrease" onClick={getCount}>
          -
        </button>
        {/* <p>Count {count === 0 ? "" : count} </p> */}
        <input
          type="text"
          value={count}
          onChange={(e) => useCount(Number(e.target.value))}
        />
        <button className="increase" onClick={getCount}>
          +
        </button>
      </div>

      <h3>
        {" "}
        {getString(count)} {getDesiredDate()}{" "}
      </h3>

      <div>
        <button
          style={{ width: "60px" }}
          onClick={() => {
            useCount(0);
            useSteps(1);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
