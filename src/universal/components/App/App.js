import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PostItem from '../PostItem/PostItem';
import { Header } from '../Header/Header';
import './App.scss';
import loadable from '@loadable/component';

const PostsList = loadable(()=> import('../PostsList/PostsList'));

const App = () => {
  return (
    <Fragment>
      <Header/>
      <div className='container'>
        <Switch>
        <Route path="/post/:id" render={({...props}) => <PostItem {...props}/>} />
        <Route exact path="/list"  component={PostsList}/>
          <Redirect to="/list" />
        {/*<Route exact path="/" component={MaxComp}/>*/}
        </Switch>
      </div>
    </Fragment>

  );
}
export default App;