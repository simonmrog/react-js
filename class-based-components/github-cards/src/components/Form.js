import React from 'react';
import "./Form.css";

class Form extends React.Component {

  state = {
    username: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${this.state.username}`);
    const profile = await res.json();
    this.props.onSubmit(profile);
    this.setState({ username: "" });
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  }

  render = () => {
    return (
      <div className="form">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="GitHub Username"
            value={ this.state.username }
            onChange={ this.handleChange }
            required
          />
          <input type="submit" value="Add Card" />
        </form>
      </div>
    );
  }
}

export default Form;
