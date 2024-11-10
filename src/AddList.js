import React, { useState } from 'react';

function AddList() {

    const [items, setItems] = useState([]);
    const addItem = () => {

        setItems([...items, `Список ${items.length + 1}`]);
    };

    return (
        <div>
            <button onClick={addItem}>Добавить элемент списка </button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddList;