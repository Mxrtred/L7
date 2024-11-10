import React, { useState } from 'react';

function ToggleVisibilityText() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Скрыть текст' : 'Показать текст'}
            </button>
            {visible && <p>Этот текст 'В'скрывается</p>}
        </div>
    );
}

export default ToggleVisibilityText;