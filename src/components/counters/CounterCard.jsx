import React, { useState } from "react";

export default function CounterCard() {
  const [count, setCount] = useState(1);
  let handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  if(count==10) {
    handleIncrement = () => setCount(count);
  }
  let handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  if(count<=1) {
    handleDecrement = () => setCount(1);
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
