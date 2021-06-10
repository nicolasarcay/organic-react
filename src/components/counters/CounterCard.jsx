import React, { useState } from "react";

const MIN = 1;
export default function CounterCard(props) {
  const [count, setCount] = useState(MIN);
  let increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  if(count===props.max) {
    increment = () => setCount(count);
  }
  let decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  if(count<=MIN) {
    decrement = () => setCount(MIN);
  }
  return (
    <div>
      <div className="d-flex align-items-center mb-3 justify-content-center">
        <button className="btn btn-primary px-2 py-1 counter-card" onClick={decrement}>-</button>
        <h6 className="px-3 my-0">{count}</h6>
        <button className="btn btn-primary px-2 py-1 counter-card" onClick={increment}>+</button>
      </div>
    </div>
  );
}
