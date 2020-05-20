import React, { useState } from 'react';
import "./Form.css";

import Question from './components/Question';

const Form = () => {

  const [ budget, setBudget ] = useState(0);
  const [ rest, setRest ] = useState(0);

  return (
    <div className="App container">
      <header><h1>Weekly Expenses</h1></header>
      <div className="main-content">
        <Question setBudget={ setBudget } setRest={ setRest } />
      </div>
    </div>
  );
}

export default Form;
