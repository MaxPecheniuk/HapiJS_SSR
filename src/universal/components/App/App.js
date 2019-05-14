import React, {Fragment} from 'react';
import { Route } from 'react-router';
import loadable from '@loadable/component';
import PostsList from '../PostsList/PostsList';
import { Header } from '../Header/Header';
import './App.scss';

const PostItem = loadable(()=> import ('../PostItem/PostItem'));

const App = () => {
  return (
    <Fragment>
      <Header/>
      <div className='container'>

          <Route exact path="/" component={PostsList}/>
          <Route path="/post/:id" component={PostItem}/>
      </div>
    </Fragment>

  );
}
export default App;