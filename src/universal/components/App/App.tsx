import * as  React  from 'react';
import {
  // Redirect,
  Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import './App.scss';
import PostsList from '../PostsList/PostsList';
// import loadable from '@loadable/component';
import PostItem from '../PostItem/PostItem';
//
// const PostItem = loadable(() => import('../PostItem/PostItem'));

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/" render={(props) => <PostsList {...props}/>}/>
          <Route path="/post/:id" render={props => <PostItem {...props}/>}/>
          {/*<Route exact={true} path="/" component={PostsList}/>*/}
          {/*<Route path="/post/:id" component={PostItem}/>*/}
          {/*<Redirect exact={true} from="/" to="/list"/>*/}
        </Switch>
      </div>
    </div>

  );
};
export default App;