import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from 'globals/history';
import Preview from './pages/preview';



class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Preview} />
        </Switch>
      </Router>
    );
  }
}

export default App;
