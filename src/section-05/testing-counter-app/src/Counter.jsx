import PropTypes from "prop-types";
import { useState } from "react";

const Counter = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(count);
  const increment = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrement = () => {
    setCurrentCount(currentCount - 1);
  };

  const reset = () => {
    setCurrentCount(count);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {currentCount}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  count: 0,
};
