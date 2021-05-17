import React from "react";

class DigitalClock extends React.Component {
  render() {
    return (
      <div className="digital-clock">
        <h1 className="orange">{this.props.time}</h1>
      </div>
    );
  }
}

export default DigitalClock;
