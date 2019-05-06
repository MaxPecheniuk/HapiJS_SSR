import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router';
import PostsList from '../PostsList/PostsList';
import { PostItem } from '../PostItem/PostItem';
import './App.scss';
import { Header } from '../Header/Header';

export default function App() {
  return (
    <Fragment>
      <Header/>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={PostsList}/>
          <Route path="/post/:id" component={PostItem}/>
        </Switch>
      </div>
    </Fragment>

  );
}
