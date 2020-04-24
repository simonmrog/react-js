import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import ChatPanel from './components/ChatPanel';
import FirstPerson from './components/FirstPerson';
import SecondPerson from './components/SecondPerson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ChatPanel />
          <Switch>
            <Route path="/" component={FirstPerson} exact />
            <Route path="/first-person" component={FirstPerson} exact />
            <Route path="/second-person" component={SecondPerson} exact />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
