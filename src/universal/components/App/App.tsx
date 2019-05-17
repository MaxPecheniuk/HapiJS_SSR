import * as  React  from 'react';
import {
  // Redirect,
  Route, Switch } from 'react-router-dom';
// import PostItem from '../PostItem/PostItem';
import { Header } from '../Header/Header';
import './App.scss';
// import loadable from '@loadable/component';
// import PostsList from '../PostsList/PostsList';
import PostItem from '../PostItem/PostItem';
import MaxComp from '../testComp/testCopm';
// import PostsList from '../PostsList/PostsList';
// import loadable from '@loadable/component';


// const PostsList = loadable(() => import('../PostsList/PostsList'));

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          {/*<Redirect to='/list'/>*/}
          <Route path="/post/:id" component={PostItem}/>
          <Route path="/list" render={({...props})=> <MaxComp {...props}/>}/>
        </Switch>
      </div>
    </div>

  );
}
export default App;