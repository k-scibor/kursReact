import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    function zmniejsz() {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    }
    function zwieksz() {
        setCount((count) => count + 1);
    }
    return (<>
        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={zwieksz}>Zwieksz</button>
            <button onClick={zmniejsz}>Zmniejsz</button>
        </div>
  </>
  )
};

export default App;
