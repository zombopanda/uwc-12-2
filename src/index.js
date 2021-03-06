import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./components/Store";


const render = Component => {
  setTimeout(() =>
    ReactDOM.render(
      <Component store={store}/>,
      document.getElementById('root')
    ));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

registerServiceWorker();
