import React, { useState } from 'react';

function Submit() {
    const [submit, setSubmit] = useState('');

    return (
        <div>
            <form>
                <input onChange={(e) => setSubmit(e.target.value)} />
            </form>
            <p>Отправка формы: {submit}</p>

        </div>
    );
}

export default Submit;