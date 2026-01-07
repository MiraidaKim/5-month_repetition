import { useState } from 'react';
import Warning from './Warning';
import './App.css';

function Counter() {
  const ageLimit = 20; 
  const [count, setCount] = useState(0);

  const showWarning = count >= ageLimit;

  const handleDecrement = () => {
    if (count <= 0) {
      alert('меньше 0 уменьшать нельзя!');
      return;
    }
    setCount(count - 1);
  }

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div className="counter-container">
      <div className="counter-box">
        <button className="button" onClick={handleDecrement}>-</button>
        <span className="count">{count}</span>
        <button className="button" onClick={handleIncrement}>+</button>
      </div>
      <Warning message={showWarning ? 'Больше вашего возраста увеличивать нельзя!' : ''} />
    </div>
  )
}

export default Counter;
