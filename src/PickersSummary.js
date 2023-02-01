import React from 'react';
import './styles.css';

function PickersSummary(props) {

    let {nombre, valor} = props;

    return (
        <>
            <div>{nombre}: {valor}</div>
        </>
    );
}

export default PickersSummary;