import React from 'react';
import ReactDOM from 'react-dom/client';
import Pickers from "./Pickers";


const slider = document.getElementById('picker');
const root = ReactDOM.createRoot(slider);

root.render(<Pickers />);