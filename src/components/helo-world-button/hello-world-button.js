// export const helloWorld = () => {
//   console.log('====================================');
//   console.log('hello world');
//   console.log('====================================');
// };

import './hello-world-button.css';

class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'hello world';
    button.classList.add('hello-world-button');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    };
    const body = document.querySelector('body');
    body.appendChild(button);
  }
}

export default HelloWorldButton;
