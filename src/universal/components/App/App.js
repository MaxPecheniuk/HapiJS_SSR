import React from 'react';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import UsersList from '../UsersList/UsersList';
import UserForm from '../UserForm/UserForm';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/list" component={UsersList}/>
      <Route path="/user_form/:id" component={UserForm}/>
    </Switch>
  );
}
