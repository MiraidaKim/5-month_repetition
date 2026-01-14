import React, { useRef, useState } from "react";

 const Counter = () => {
  const count = useRef(0);
  const [, setUpdate] = useState(false);

  const minus = () => {
       count.current--;
       setUpdate((prev) => !prev);
  };
  const plus = () => {
       count.current++;
       setUpdate((prev) => !prev);
  };

  return (
    <div>
        <button onClick={minus}>-</button>
        <span>{count.current}</span>
        <button onClick={plus}>+</button>
    </div>
  );
};


export default Counter;

