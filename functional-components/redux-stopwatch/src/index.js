import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from 'react-redux';
import container from "./store.js";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onStart: () => { dispatch({ type: "START" }); },
    onStop: () => { dispatch({ type: "STOP" }); }
  };
};

const Stopwatch = connect(mapStateToProps, mapDispatchToProps)(props => {
  let minutes = Math.floor(props.time / 60);
  let seconds = parseInt(props.time - (minutes / 60));
  let formattedSeconds = `${seconds < 10 ? 0 : ""}${seconds}`;

  return (
    <div>
      { minutes }:{ formattedSeconds }<br />
    <button onClick={props.running ? props.onStop : props.onStart }>{ props.running ? "Stop" : "Start" }</button>
    </div>);
});


ReactDOM.render(
  <Provider store={container}>
    <Stopwatch />, document.getElementById('root')
  </Provider>
);

setInterval(() => {
  container.dispatch({ type: "TICK" });
}, 1000);