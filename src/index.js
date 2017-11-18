import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers';
import App from './App';

// we wrap store in a function for testing purposes
export function configureStore(){
  return createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <App store={configureStore()} />
  </Provider>,
  document.getElementById('root')
);
