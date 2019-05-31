import * as  React  from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';

import PostsListsLoader from '../PostsListLoader/PostsListLoader';
import PostItemLoader from '../PostItemLoader/PostItemLoader';

import './App.scss';
import { GlobalHistory } from '../../Hh';

const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalHistory />

      <Header/>
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={PostsListsLoader}/>}/>
          <Route path="/post/:id" component={PostItemLoader}/>
        </Switch>
      </div>
    </Fragment>

  );
};
export default App;