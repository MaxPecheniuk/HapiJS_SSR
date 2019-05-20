import * as  React  from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import './App.scss';
import PostsList from '../PostsList/PostsList';
import loadable from '@loadable/component';

const PostItem = loadable(() => import('../PostItem/PostItem'));

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/post/:id" component={PostItem}/>
          <Route path="/list" render={({...props}) => <PostsList {...props}/>}/>
          <Redirect to="/list"/>
        </Switch>
      </div>
    </div>

  );
};
export default App;