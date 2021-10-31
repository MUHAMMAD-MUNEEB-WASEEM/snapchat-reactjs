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
import ChatView from './components/Chats/ChatView/ChatView';
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/Login/Login';

function App() {

  const user = useSelector(state=>state.app.user)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <Router>

        {!user ? (
          <Login/>
        ):(
          <div className="app__body">

            <Switch>
              <Route path="/chats/view">
                <ChatView/>
              </Route>
              <Route path="/chats">
                <Chats/>
              </Route>
              <Route path="/preview">
                <Preview/>
              </Route>
              <Route exact path="/">
                <WebCamCapture/>
              </Route>
            </Switch>
        
      </div>
      )}
        </Router>
    </div>
      
  );
}

export default App;
