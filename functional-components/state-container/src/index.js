import React from "react";
import ReactDOM from "react-dom";

const createStore = (reducer, initialState) => {
  let internalState = initialState;
  let handlers = [];
  return {
    dispatch: intent => {
      internalState = reducer(internalState, intent);
      handlers.forEach(h => h());
    },
    subscribe: handler => {
      handlers.push(handler);
    },
    getState: () => internalState
  };
};

const view = model => {
  let minutes = Math.floor(model.time / 60);
  let seconds = parseInt(model.time - (minutes / 60));
  let formattedSeconds = `${seconds < 10 ? 0 : ""}${seconds}`;

  const handler = () => {
    container.dispatch(model.running ? "STOP" : "START");
  };

  return (
    <div>
      { minutes }:{ formattedSeconds }<br />
    <button onClick={handler}>{ model.running ? "Stop" : "Start" }</button>
    </div>);
};

const update = (model, intent) => {
  const updates = {
    "TICK": model => Object.assign(model, { time: model.time + (model.running ? 1 : 0) }),
    "START": model => Object.assign(model, { running: true }),
    "STOP": model => Object.assign(model, { running: false })
  };
  return updates[intent](model);
};

let container = createStore(update, { running: false, time: 0 });

const render = () => ReactDOM.render(view(container.getState()), document.getElementById('root'));
container.subscribe(render);

setInterval(() => {
  container.dispatch("TICK");
}, 1000);