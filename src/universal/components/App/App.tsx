import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PostItem from '../PostItem/PostItem';
import { Header } from '../Header/Header';
import './App.scss';
import loadable from '@loadable/component';

const PostsList = loadable(() => import('../PostsList/PostsList'));

class App extends React.Component {
  render() {
  return (
    <Fragment>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/post/:id" component={PostItem}/>
          <Route exact={true} path="/list" component={PostsList}/>
          <Redirect to="/list"/>
        </Switch>
      </div>
    </Fragment>

  );}
}
export default App;