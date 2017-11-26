import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { AppContainer } from 'react-hot-loader'
import AppPreview from './AppPreview';

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

render(AppPreview)

if (module.hot) {
  module.hot.accept('./AppPreview', () => {
    const newApp = require('./AppPreview');
    render(newApp.default || newApp);
  })
}
