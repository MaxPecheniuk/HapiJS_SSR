import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router';
import loadable from '@loadable/component';
import { Header } from '../Header/Header';
import './App.scss';

const PostsList = loadable(()=> import ('../PostsList/PostsList'));
const PostItem = loadable(()=> import ('../PostItem/PostItem'));

export default function App() {
  return (
    <Fragment>
      <Header/>
      <div className='container'>
        <Switch>
          <Route exact path={["/","/*/:search="]} component={PostsList}/>
          <Route path="/post/:id" component={PostItem}/>
        </Switch>
      </div>
    </Fragment>

  );
}
