import React from 'react';
import Home from '../home/home';
import { Route, Switch } from 'react-router';
import PostsList from '../postsList/postsList';
import { PostItem } from "../postItem/postItem";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/posts" component={PostsList}/>
      <Route path="/post/:id" component={PostItem}/>
    </Switch>
  );
}
