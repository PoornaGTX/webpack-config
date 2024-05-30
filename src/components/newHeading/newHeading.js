import './newHeading.css';

class NewHeading {
  render() {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'webpack is awesome new heading';
    body.appendChild(h1);
  }
}

export default NewHeading;
