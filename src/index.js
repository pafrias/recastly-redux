import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
// import searchYouTube from './lib/searchYouTube.js';
// import YOUTUBE_API_KEY from './config/youtube.js';
import { Provider } from 'react-redux';
import store from './store/store';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
);
