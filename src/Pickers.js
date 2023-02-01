import React from 'react';
import './styles.css';
import { useState } from 'react';
import Picker from './Picker';
import PickersSummary from './PickersSummary';
import Gradient from './Gradient';


function Pickers() {

    let [valores, setValores] = useState({hue: 0, saturation:0, steps: 5});

    return (
        <div>
            <Picker nombre='Hue' min={0} max={360} cambiar={(v) => setValores({hue: v, saturation: valores.saturation, steps: valores.steps})}/>
            <Picker nombre='Saturation' min={0} max={100} cambiar={(v) => setValores({hue: valores.hue, saturation: v, steps: valores.steps})}/>
            <Picker nombre='Steps' min={5} max={10} cambiar={(v) => setValores({hue: valores.hue, saturation: valores.saturation, steps: v})}/>
            <PickersSummary nombre='Hue' valor={valores.hue} />
            <PickersSummary nombre='Saturation' valor={valores.saturation} />
            <PickersSummary nombre='Steps' valor={valores.steps} />
            <br></br>
            <Gradient hue={valores.hue} saturation={valores.saturation} number={valores.steps}/>
        </div>
    );
}

export default Pickers;




















































// import React from 'react';
// //import './styles';

// function Picker() {
    
//     // El componente tendrá tres sliders creados con <input type="range"
//     return (
//         <div>
//             <h1>Picker</h1>
//             <div className='slidecontainer'>
//                 <input type="range" min="0" max="360" onInput={ (e) => document.getElementById("hue").innerText = "Hue: " + e.target.value}></input>
//                 <br></br>
//                 <input type="range" min="0" max="100" onInput={ (e) => document.getElementById("sat").innerText = "Saturation: " + e.target.value}></input>
//                 <br></br>
//                 <input type="range" min="5" max="10" onInput={ (e) => document.getElementById("steps").innerText = "Steps: " + e.target.value}></input>
//             </div>
//             <div>
//                 <p id="hue">Hue: 0</p>
//                 <p id="sat">Saturation: 0</p>
//                 <p id="steps">Steps: 0</p>
//             </div>
//         </div>
//     );    

// }

// export default Picker;