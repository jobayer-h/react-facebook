import React from 'react';
import './App.css';
import PrimarySearchAppBar from './Component/Header';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound';
import Post from './Component/Post';
function App() {
  return (
    <Router>
      <PrimarySearchAppBar></PrimarySearchAppBar>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <Post></Post>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
