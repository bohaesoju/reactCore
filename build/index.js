/* @jsx createElement */
import { createElement, render } from './react.js';
console.log('Tiny-React !!');

function Title(props) {
  return createElement("h2", null, "\uD0C0\uC774\uD2C0 \uCEF4\uD3EC\uB10C\uD2B8");
}

console.log(Title()); // render(<Title />, document.querySelector('#root'));