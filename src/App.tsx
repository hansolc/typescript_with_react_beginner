import React from 'react';
import { getValue } from './legacy.js';

function App({ name, age}: {name: string, age: number}) {
    const value = getValue();
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}

export default App;