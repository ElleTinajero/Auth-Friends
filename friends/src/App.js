import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
   <BrowserRouter>
    <Link to='/login'>Login</Link>
    <Link to='/friends'>Friends</Link>
    <Switch>
      <PrivateRoute exact path='/friends' component={Friends} />
      <Route path='/login' component={Login}/>
      <Route component={Login}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
