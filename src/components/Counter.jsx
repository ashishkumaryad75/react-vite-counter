import "../App.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    counter >= !0 && setCounter(0);
  };
  const decrement = () => {
    counter >= !0 && setCounter(counter - 1);
  };

  return (
    <>
      <h1>This is Counter App Component...</h1>
      <h3>The Counter is: {counter}</h3>
      <button
        className="btn btn-primary counter"
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger counter"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-warning counter"
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
