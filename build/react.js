export class Component {}

function renderRealDOM(virtualDOM) {
  if (typeof virtualDOM === 'string') {
    return document.createTextNode(virtualDOM);
  }

  if (virtualDOM === undefined) return;
  const $el = document.createElement(virtualDOM.tagName);
  virtualDOM.children.map(renderRealDOM).forEach(node => {
    $el.appendChild(node);
  });
  return $el;
}

export const render = function () {
  let prevVdom = null;
  return function (nextVdom, container) {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    } // diff


    container.appendChild(renderRealDOM(nextVdom));
  };
}();
export function createElement(tagName, props, ...children) {
  if (typeof tagName === 'function') {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ ...props,
        children
      });
      return instance.render();
    } else {
      return tagName.apply(null, [props, ...children]);
    }
  }

  return {
    tagName,
    props,
    children
  };
}