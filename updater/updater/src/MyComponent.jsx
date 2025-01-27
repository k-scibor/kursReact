import { useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <p>Licznik: {count}</p>
            <button onClick={decrement}>Zmniejsz</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Zwiêksz</button>
        </div>
    );
}

export default MyComponent;