import * as  React  from 'react';
import {
  // Redirect,
  Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import './App.scss';
import PostsList from '../PostsList/PostsList';
import PostItem from '../PostItem/PostItem';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact={true} path="/" render={(props) => <PostsList {...props}/>}/>
          <Route path="/post/:id" render={props => <PostItem {...props}/>}/>
        </Switch>
      </div>
    </div>

  );
};
export default App;