import React, { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Счётчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

export default ClickCounter;