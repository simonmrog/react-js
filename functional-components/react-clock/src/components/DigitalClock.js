import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  tick() {
    this.setState(() => {
      return ({
        time: new Date().toLocaleTimeString()
      });
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div class="digital-clock">
        <h1 className="orange">
          { this.state.time }
        </h1>
        
        <style jsx>{`
          .orange {
            color: #f15b2a;
          }`
        }
        </style>
      </div>
    );
  }
};

export default Hello;