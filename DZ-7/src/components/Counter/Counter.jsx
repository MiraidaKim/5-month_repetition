import React, { useRef } from 'react';
import "./style.css";

const Counter = () => {
    const count_ref = useRef(null);
    const view_counter_num_fn = () => {
        console.log(count_ref.current.value);
    };
    return (
        <div style={{ display: 'flex', gap: 20}}>
            <button>minus</button>
            <p ref={count_ref}>{10}</p>
            <button>plus</button>

            <button onClick={view_counter_num_fn}>view</button>
        </div>
    );
};

export default Counter;