import Kiwi from './kiwi.jpg';
import './kiwi-image.css';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.src = Kiwi;
    img.alt = 'Kiwi';
    img.classList.add('kiwi-image');

    const boadyDomElement = document.querySelector('body');
    boadyDomElement.appendChild(img);
  }
}

export default KiwiImage;
