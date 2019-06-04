import * as  React  from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import PostsList from '../PostsList/PostsList';
import './App.scss';
import { GlobalHistory } from '../share.components/GlobalHistory/GlobalHistory';
import SinglePost from '../SinglePost/SinglePost';

const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalHistory />
      <Header/>
      <main className="container">
        <Switch>
          <Route exact={true} path="/" component={PostsList}/>
          <Route path="/post/:id" component={SinglePost}/>
        </Switch>
      </main>
    </Fragment>

  );
};
export default App;