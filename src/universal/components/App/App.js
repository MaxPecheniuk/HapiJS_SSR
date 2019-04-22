import React from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import Posts from '../Posts/posts';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/posts" component={Posts}/>
    </Switch>
  );
}
