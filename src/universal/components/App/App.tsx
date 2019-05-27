import * as  React  from 'react';
import { Route, Switch } from 'react-router-dom';
import Header  from '../Header/Header';
import './App.scss';
import PostsList from '../PostsList/PostsList';
import loadable from '@loadable/component';

const PostItem = loadable(() => import('../PostItem/PostItem'));

const App: React.FunctionComponent<any> = (props: any) => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact={true} path="/" component={PostsList}/>}/>
          <Route path="/post/:id" component={PostItem}/>
        </Switch>
      </div>
    </div>

  );
};
export default App;