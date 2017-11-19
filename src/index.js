import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.less';
import App from './App';

// if(process.env.NODE_ENV !== 'production') {
//   const mobx = require('mobx');
//   const installDevTools = require('mobx-formatters').default;
//   installDevTools(mobx);
// }

ReactDOM.render(<App />, document.getElementById('root'));
