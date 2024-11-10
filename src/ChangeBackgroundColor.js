import React, { useState } from 'react';

function ChangeBackgroundColor() {
    const [bgColor, setBgColor] = useState('Red');

    return (
        <div style={{ backgroundColor: bgColor, padding: '20px' }}>
            <button onClick={() => setBgColor(bgColor === 'Red' ? 'Green' : 'Blue')}>
                Изменить цвет фона
            </button>
        </div>
    );
}

export default ChangeBackgroundColor;