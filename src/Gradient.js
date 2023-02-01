import React from 'react';
import CreateDivs from './createDivs';
import './styles.css';

function Gradient(props) {

    let {hue, saturation, number} = props;

    return (
        <>
            <div className='squares'>
                <CreateDivs hue={hue} saturation={saturation} number={number}/>
            </div>
        </>
    );
}

export default Gradient;