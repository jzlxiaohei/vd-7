import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { AppContainer } from 'react-hot-loader'
import './styles/index.less';
import App from './App';

if(process.env.NODE_ENV !== 'production') {
  const mobx = require('mobx');
  const installDevTools = require('mobx-formatters').default;
  installDevTools(mobx);
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const newApp = require('./App');
    render(newApp.default || App);
  })
}
