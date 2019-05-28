import * as  React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import './App.scss';
import PostsListsLoader from '../PostsListLoader/PostsListLoader';
import PostItemLoader from '../PostItemLoader/PostItemLoader';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={PostsListsLoader}/>}/>
          <Route path="/post/:id" component={PostItemLoader}/>
        </Switch>
      </div>
    </div>

  );
};
export default App;