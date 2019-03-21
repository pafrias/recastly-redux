import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// var initialState = {
//   currentVideo: exampleVideoData[0],
//   videoList: exampleVideoData,
// };

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
