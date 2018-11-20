import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './app';
import SignIn from '../components/signin';

const Root = () => (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
);


export default Root;