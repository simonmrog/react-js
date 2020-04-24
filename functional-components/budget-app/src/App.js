import React from 'react';
import "./App.css";

import Question from './components/Question';

const App = () => {
  return (
    <div className="App container">
      <header><h1>Weekly Expenses</h1></header>
      <div className="main-content">
        <Question />
      </div>
    </div>
  );
}

export default App;
