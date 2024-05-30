import Heading from './components/heading/heading.js';

import HelloWorldButton from './components/helo-world-button/hello-world-button.js';
import NewHeading from './components/newHeading/newHeading.js';

import React from 'react';

// import { addImage } from './add-image.js';

const heading = new Heading();
heading.render('hello-world');

const newHeading = new NewHeading();
newHeading.render('hello-world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
// addImage();

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
} else {
  console.log('development mode ');
}

helloWorldButton.methodNotExisit();
