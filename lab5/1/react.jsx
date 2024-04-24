import React from 'react';
import ReactDOM from 'react-dom';

let name = "James";
let output = <span>{ name } is <strong>12</strong> years old</span>
const myDiv = document.querySelector('#myDiv');
ReactDOM.render(output, myDiv);