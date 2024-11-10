import React, { useState } from 'react';

function DisplayInput() {
    const [text, setText] = useState('');

    return (
        <div>
            <input type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
            <button onClick={() => setText(text)}>Отобразить текст</button>
            <div>{text && `Отображаемый текст: ${text}`}</div>
        </div>
    );
}

export default DisplayInput;