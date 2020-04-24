import React from 'react';
import './App.css';

import Form from "./components/Form";
import CardList from "./components/CardList";

class App extends React.Component {
  state = {
    profiles: []
  };

  addProfile = profile => {
    this.setState(prevState => ({
      profiles: [ ...prevState.profiles, profile ]
    }));
  };

  render = () => {

    return (
      <div className="App">
        <h1>Github Cards App</h1>
        <Form onSubmit={ this.addProfile } />
        <CardList profiles={ this.state.profiles }/>
      </div>
    );
  }
}

export default App;
