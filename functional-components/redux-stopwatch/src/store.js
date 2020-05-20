import { createStore } from 'redux';

const update = (model={ running: false, time: 0 }, action) => {
  const updates = {
    "TICK": model => Object.assign({}, model, { time: model.time + (model.running ? 1 : 0) }),
    "START": model => Object.assign({}, model, { running: true }),
    "STOP": model => Object.assign({}, model, { running: false })
  };
  return (updates[action.type] || (() => model))(model);
};

let container = createStore(update);

export default container;