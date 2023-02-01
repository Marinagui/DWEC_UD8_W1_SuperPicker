import React from 'react';
import { useState } from 'react';

function Picker(props) {

    let {nombre, min, max, cambiar} = props;
    let [valor, setValor] = useState(min);

    function cambiarValor(e) {
        setValor(e.target.value);
        cambiar(e.target.value);
    }

    return (
        <div className='slide-container'>
            <p>{nombre}:</p>
            <input type="range" min={min} max={max} onChange={ cambiarValor } value={valor}>
            </input>
            <p>{valor}</p>
        </div>
    );
}

export default Picker