import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './Redux/ConfigureStore';
import Auth from './View/Authorization'
import Main from './View/Main'

const store = ConfigureStore();

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/Home" component={Main} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </Provider>
);

export default App;
