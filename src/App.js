import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import ConfigureStore from './Redux/ConfigureStore';
import Auth from './View/Authorization'

const store = ConfigureStore();

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect to="/" />
    </Switch>
  </Provider>
);

export default App;
