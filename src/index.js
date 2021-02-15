/* @jsx createElement */

import { createElement, render } from './react.js';

console.log('Tiny-React !!');

function Title(props){
  return(
    <h2>타이틀 컴포넌트</h2>
  );
}

console.log(Title());

// render(<Title />, document.querySelector('#root'));