/* @jsx createElement */

import { createElement, render , Component} from './react.js';

class ClassTitle extends Component {
  render(){
    return(
      <h3>클래스 타이틀</h3>
    )
  }
}

function Title(props){
  return(
    <div>
      <h2>타이틀 컴포넌트</h2>
      <ClassTitle />
      <h4>제목 입니다</h4>
    </div>
  );
}

// console.log(Title());

render(<Title />, document.querySelector('#root'));