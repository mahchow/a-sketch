import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


const div = document.createElement('root')
div.id = 'root'
document.body.appendChild(div)

// ReactDOM.render(<App />, div);
ReactDOM.render(<App/>,document.querySelector('#root'))


console.log('it works!')