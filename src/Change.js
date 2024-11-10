import React, { useState } from 'react';

function Change() {
    const [name, setName] = useState("Кирилл");
    function change() {
        if (name == "л7") setName("Кирилл")
        else
            setName("л7")
    }
    return (
        <header>
            <h1>Привет, {name}! </h1>
            <button onClick={change}>Нажать сюда</button>
        </header>
    );
}
export default Change;
