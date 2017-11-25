import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from 'globals/history';
import Design from './pages/design';
import Preview from './pages/preview';



class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/design" component={Design} />
          <Route path="/preview" component={Preview} />
        </Switch>
      </Router>
    );
  }
}

export default App;
