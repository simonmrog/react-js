import React, { useState } from 'react';
import "./App.css";

import Question from './components/Question';

const App = () => {

  const [ budget, setBudget ] = useState(0);
  const [ rest, setRest ] = useState(0);

  return (
    <div className="App container">
      <header><h1>Weekly Expenses</h1></header>
      <div className="main-content">
        <Question setBudget={ setBudget } setRest={ setRest } />
        <div className="row">
        <div className="one-half column">
          1
        </div>
        <div className="one-half column">
          2
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
