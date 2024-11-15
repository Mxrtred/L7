import React, { useState } from 'react';

function DisplayInput() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    return (
        <div>
            <input type="text"
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
            />
            <button onClick={() => setText2(text)}>Отобразить текст</button>
            <div>{text2 && `Отображаемый текст: ${text2}`}</div>
        </div>
    );
}

export default DisplayInput;