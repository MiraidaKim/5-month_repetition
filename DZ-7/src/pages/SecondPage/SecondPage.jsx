import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
    const navigate = useNavigate();
    const go_detailed_fn = () => {
        navigate("/detailed");
    };
    return (
        <div>
            <p>SecondPage</p>
            <button onClick={go_detailed_fn}>go to detailed page</button>
        </div>
    )
}

export default SecondPage;