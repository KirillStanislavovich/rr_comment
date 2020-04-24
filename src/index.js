import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import comments from './redux/reducers/commentReducer'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  comments: []
}

if (localStorage.getItem("commentStorage")) {
  const localComments = JSON.parse(localStorage.getItem("commentStorage"));
  initialState.comments = localComments
} else {localStorage.setItem("commentStorage", JSON.stringify([]))}

const store = createStore(comments, initialState.comments, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <App store={ store }/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
