import { useState } from 'react'
import './App.css'

var x = 0;

function App() {
    const [count, setCount] = useState(0);
    return (<>
        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
  </>
  )
};

export default App;
