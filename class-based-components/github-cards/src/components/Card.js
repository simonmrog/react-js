import React from 'react';
import './Card.css';

class Card extends React.Component {
  render = () => {
    const { name, avatar_url, company } = this.props;

    return (
      <div className="card">
        <img className="image" src={ avatar_url } alt="profile" />
        <div className="info">
          <div className="name">{ name }</div>
    <div className="company">{ company }</div>
        </div>
      </div>
    );
  }
}

export default Card;
