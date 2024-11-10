import React, { useState } from 'react';

function LiveUpdate() {
    const [comm, setComm] = useState('');

    return (
        <div>
            <form>
                <input onChange={(e) => setComm(e.target.value)} />
            </form>
            <p>Обновляет текст: {comm}</p>
            <button>
                {comm}
            </button>
        </div>
    );
}

export default LiveUpdate;
