import React, { useState } from 'react';

function Submit() {
    const [submit, setSubmit] = useState('');
    const [submit2, setSubmit2] = useState('');
    return (
        <div>
            <form>
                <input onChange={(e) => setSubmit(e.target.value)} />
            </form>
            <button onClick={() => setSubmit2(submit)}>Отобразить</button>
            <div>{submit2 && `Отправка формы: ${submit2}`}</div>
        </div>
    );
}

export default Submit;