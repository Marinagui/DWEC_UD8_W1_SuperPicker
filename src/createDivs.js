import React from 'react';
import './styles.css';

function CreateDivs(props) {

    const divsCreated = [];

    // El componente creará tantos divs como los indicados en number
    for (let i = 0; i < props.number; i++) {
        const hsl = {
            backgroundColor: `hsl(${props.hue}, ${props.saturation}%, ${(i*(100/props.number))}%)`
        }
        divsCreated.push(
            <div className='square' key={i} style={hsl}>
            </div>
        );
    }
    
    return divsCreated;
}

export default CreateDivs;
