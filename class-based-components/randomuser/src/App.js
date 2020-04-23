import React from 'react';
import axios from "axios";
import Loading from "./Loading";

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      users: [],
      loading: false
    };

    // binding
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers () {
    this.setState ({loading: true});
    axios.get ("https://api.randomuser.me/?nat=US&results=5")
    .then ((response) => {
      this.setState ({
        users: [...this.state.users, ...response.data.results],
        loading: false
      });
    });
  }

  componentDidMount() {
    this.getUsers ();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log("more users");
  }

  results() {
    if (this.state.loading)
      return (<Loading message="Loading data"/>);
    else
      return (<div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users"/>
        </form>
        <hr/>
        {this.state.users.map ((user) => {
        return (
          <div key={user.id.value}>
            <h3 style={{color: "red"}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr/>
          </div>
        );})
      }</div>);
  }

  render () {
    return (
      <div className="App">
        {this.results()}
      </div>
    );
  }
}

export default App;