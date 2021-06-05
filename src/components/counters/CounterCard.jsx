import React, { useState } from "react";

const MIN = 1;
const MAX = 10;
export default function CounterCard() {
  const [count, setCount] = useState(MIN);
  let handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  if(count==MAX) {
    handleIncrement = () => setCount(count);
  }
  let handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  if(count<=MIN) {
    handleDecrement = () => setCount(MIN);
  }
  return (
    <div>
      <div className="d-flex align-items-center mb-3 justify-content-center">
        <button className="btn btn-primary px-2 py-1 counter-card" onClick={handleDecrement}>-</button>
        <h6 className="px-3 my-0">{count}</h6>
        <button className="btn btn-primary px-2 py-1 counter-card" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}
