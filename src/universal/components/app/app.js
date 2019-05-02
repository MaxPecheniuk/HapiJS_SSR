import React, {Fragment} from 'react';
// import Home from '../home/home';
import { Route, Switch } from 'react-router';
import PostsList from '../postsList/postsList';
import { PostItem } from '../postItem/postItem';
import './app.scss';
import { Header } from '../header/header';

export default function App() {
  return (
    <div className="sss">
      <Header/>
      MAXXXXsss

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
