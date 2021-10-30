import React from 'react';
import './App.css';
import WebCamCapture from './components/WebCamCapture/WebCamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
      <div className="app__body">

        <Switch>
          <Route path="/">
            <WebCamCapture/>
          </Route>
          <Route path="/preview">
            <WebCamCapture/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
