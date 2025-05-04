import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);    // Counter value
  const [step, setStep] = useState(1);      // Step value

  // Increase counter
  const increase = () => {
    setCount(count + step);
  };

  // Decrease counter (not below 0)
  const decrease = () => {
    setCount(count - step >= 0 ? count - step : 0);
  };

  // Reset to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Value: {count}</h2>

      {/* Step input */}
      <div>
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ fontSize: '16px', padding: '5px', marginLeft: '10px' }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={increase} style={btnStyle}>Increase</button>
        <button onClick={decrease} style={btnStyle}>Decrease</button>
        <button onClick={reset} style={{ ...btnStyle, backgroundColor: 'red', color: 'white' }}>Reset</button>
      </div>
    </div>
  );
}

// Simple button style
const btnStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default App;
