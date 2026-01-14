import React, { useRef } from "react";


const FocusInput = () => {
  const input_ref = useRef(null);
  const focus_fn = () => {
      input_ref.current.focus();
  };

  return (
    <div>
        <input ref={input_ref} type="text" />
        <button onClick={focus_fn}>Фокус</button>
    </div>
  );
};




export default FocusInput;
