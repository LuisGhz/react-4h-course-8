import { useState, useCallback } from 'react';

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment1 = () => {
    setCounter1(counter1 + 1);
  }
  
  const increment2 = () => {
    setCounter2(counter2 + 1);
  }


  return (
    <div className="App">
      <p>Counter 1: { counter1 } Counter 2: { counter2 }</p>
      <button onClick={ increment1 } >Increment counter 1</button>
      <button onClick={ increment2 } >Increment counter 2</button>
    </div>
  );
}

export default App;
