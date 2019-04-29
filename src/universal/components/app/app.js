import React from 'react';
import Home from '../home/home';
import { Route, Switch } from 'react-router';
import PostsList from '../postsList/postsList';
import { PostItem } from "../postItem/postItem";
import './app.scss';

export default function App() {
  return (
		  <Switch>
			  <div className='container'>

			  <Route exact path="/" component={Home}/>
			  <Route path="/posts" component={PostsList}/>
			  <Route path="/post/:id" component={PostItem}/>
			  </div>

		  </Switch>

  );
}
