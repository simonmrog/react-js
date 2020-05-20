import React, { useState } from 'react';
import "./Question.css";

import ErrorMessage from "./ErrorMessage";

const Question = props => {

  // STATE
  const [ budget, setBudget ] = useState(0);
  const [ validForm, setValidation ] = useState(true);

  // HANDLERS
  const onChangeHandler = e => {
    const value = parseInt(e.target.value);
    setBudget(value)
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (budget <= 0 || isNaN(budget)) setValidation(false);
    else {
      setValidation(true);
      props.setBudget(budget);
      props.setRest(budget);
    }
  }

  return (
    <div className="Question">
      <h2>Enter your budget</h2>
      <form onSubmit={ onSubmitHandler }>
        <input
          type="number"
          className="u-full-width"
          placeholder="Budget"
          value={ budget }
          onChange={ onChangeHandler }
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="start"
        />
        { !validForm && <ErrorMessage>Invalid Budget</ErrorMessage> }
      </form>
    </div>
  );
};

export default Question;
