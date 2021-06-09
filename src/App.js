import { useState, useCallback } from 'react';

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // functions are recreated. This represents perfomance issues.
  // Use useCallback to avoid recreate.
  const increment1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1])
  
  const increment2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2])


  return (
    <div className="App">
      <p>Counter 1: { counter1 } Counter 2: { counter2 }</p>
      <button onClick={ increment1 } >Increment counter 1</button>
      <button onClick={ increment2 } >Increment counter 2</button>
    </div>
  );
}

export default App;
