import React from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import List from '../List/List';
import { PostForm } from '../PostForm/PostForm';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/page" component={List}/>
      <Route path="/form" component={PostForm}/>
    </Switch>
  );
}
