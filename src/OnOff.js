import React, { useState } from 'react';

function OnOff() {
    const [buttonText, setButtonText] = useState('Вкл');

    const changeButtonText = () => {
        if (buttonText === 'Вкл') {
            setButtonText('Выкл');
        } else {
            setButtonText('Вкл');
        }
    };

    return (
        <div>
            <button onClick={changeButtonText}>{buttonText}</button>
        </div>
    );
}

export default OnOff;