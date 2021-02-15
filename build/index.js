/* @jsx createElement */
import { createElement, render, Component } from './react.js';

class ClassTitle extends Component {
  render() {
    return createElement("h3", null, "\uD074\uB798\uC2A4 \uD0C0\uC774\uD2C0");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uD0C0\uC774\uD2C0 \uCEF4\uD3EC\uB10C\uD2B8"), createElement(ClassTitle, null), createElement("h4", null, "\uC81C\uBAA9 \uC785\uB2C8\uB2E4"));
} // console.log(Title());


render(createElement(Title, null), document.querySelector('#root'));