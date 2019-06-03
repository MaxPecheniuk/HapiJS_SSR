import * as  React  from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';

// import PostsListsLoader from '../PostsListLoader/PostsListLoader';
import PostItemLoader from '../PostItemLoader/PostItemLoader';

import './App.scss';
import { GlobalHistory } from '../share.components/GlobalHistory/GlobalHistory';
import PostsList from '../PostsList/PostsList';

const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalHistory />

      <Header/>
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={PostsList}/>}/>
          <Route path="/post/:id" component={PostItemLoader}/>
        </Switch>
      </div>
    </Fragment>

  );
};
export default App;