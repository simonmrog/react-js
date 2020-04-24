import React from 'react';
import './CardList.css';

import Card from './Card';

class CardList extends React.Component {
  render = () => {
    const profiles = this.props.profiles;

    return (
      <div className="card-list">
        { profiles.map(
            profile => <Card key={ profile.name } { ...profile } />
          )
        }
      </div>
    );
  }
}

export default CardList;
