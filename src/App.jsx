import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount, reset } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value); // Get the current counter value from the Redux state
  const dispatch = useDispatch(); // Get the dispatch function to trigger actions

  // Local state to store the increment and decrement values entered by the user
  const [incrementValue, setIncrementValue] = useState(0);
  const [decrementValue, setDecrementValue] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter with Increment and Decrement by Value</h1>
      <h2>{count}</h2>

      {/* Input for increment value */}
      <input
        type="number"
        value={incrementValue}
        onChange={(e) => setIncrementValue(Number(e.target.value))}
        placeholder="Enter increment value"
      />
      <br/><br/>
      
      {/* Input for decrement value */}
      <input
        type="number"
        value={decrementValue}
        onChange={(e) => setDecrementValue(Number(e.target.value))}
        placeholder="Enter decrement value"
      />
      <br/><br/>

      {/* Buttons to increment and decrement by specific values */}
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Increment by {incrementValue}
      </button>
      <button onClick={() => dispatch(decrementByAmount(decrementValue))}>
        Decrement by {decrementValue}
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
