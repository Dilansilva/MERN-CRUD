import React from 'react';

import {BrowserRouter as Router, 
  Route, 
    Switch  } from "react-router-dom";//essentials forreact-router

import Create from './pages/Create';//import create page
import Read from './pages/Read';//import Read page
import Update from './pages/Update';//import Update page
import Delete from './pages/Delete';;//import Delete page

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Create/>
          </Route>

          <Route path="/read">
            <Read/>
          </Route>

          <Route path="/update">
            <Update/>
          </Route>

          <Route path="/delete">
            <Delete/>
          </Route>  
    </Switch>
  </div>
    </Router>
  );
}

export default App;
