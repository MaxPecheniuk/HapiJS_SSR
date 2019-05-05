import React, {Fragment} from 'react';
// import Home from '../home/home';
import { Route, Switch } from 'react-router';
import PostsList from '../PostsList/PostsList';
import { PostItem } from '../PostItem/PostItem';
import './App.scss';
import { Header } from '../Header/Header';

export default function App() {
  return (
    <div className="sss">
      <Header/>
      <div className='container'>
        <Switch>
          {/*<Route exact path="/" component={Home}/>*/}
          <Route exact path="/" component={PostsList}/>
          <Route path="/post/:id" component={PostItem}/>
        </Switch>
      </div>
    </div>

  );
}
