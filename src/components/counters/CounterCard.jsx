import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MIN = 0;
const MAX = 10;
export default function CounterCard(props) {
  const [count, setCount] = useState(MIN);
  const increment = () => {
    let result = count + 1;
    if (result <= MAX) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    let result = count - 1;
    if (result >= MIN) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3 justify-content-center">
        <button
          className="btn btn-primary px-2 py-1 counter-card"
          onClick={decrement}
        >
          -
        </button>
        <h6 className="px-3 my-0">{count}</h6>
        <button
          className="btn btn-primary px-2 py-1 counter-card"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={count === 0 ? "invisible" : "visible"}>
        <Button variant="primary" className="rounded-pill">
          Comprar
        </Button>
      </div>
    </div>
  );
}
