import React from 'react';
import "./ErrorMessage.css";

const ErrorMessage = ( { children }) => (
  <p className="alert alert-danger">{ children }</p>
);

export default ErrorMessage;
