import React, { useState } from 'react';

function Focus() {
    const [text, setText] = useState('');
    const [blurText, setBlurText] = useState('');

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                onBlur={(e) => setBlurText(`Вы ввели: ${e.target.value}`)}
                placeholder="Введите текст"
            />
            {text && <p>{text}</p>}
        </div>
    );
}

export default Focus;