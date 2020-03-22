import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
         <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/users">
          <Users />
        </PrivateRoute>
        </Switch>
      
    </div>
  );
}

export default App;
