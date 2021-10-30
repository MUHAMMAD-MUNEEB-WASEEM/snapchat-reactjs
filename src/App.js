import React from 'react';
import './App.css';
import WebCamCapture from './components/WebCamCapture/WebCamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './components/Preview/Preview';
import Chats from './components/Chats/Chats';


function App() {
  return (
    <div className="app">
      <Router>
      <div className="app__body">

        <Switch>
          <Route exact path="/">
            <WebCamCapture/>
          </Route>
          <Route path="/preview">
            <Preview/>
          </Route>
          <Route path="/chats">
            <Chats/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
