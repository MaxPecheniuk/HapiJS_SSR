import React from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import Page from '../Page2/Page2';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/page" component={Page}/>
    </Switch>
  );
}