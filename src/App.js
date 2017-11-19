import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from 'globals/history';
import Design from './pages/design';

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/design" component={Design} />
        </Switch>
      </Router>
    );
  }
}

export default App;
