import React from "react";

// Styles
import "../src/components/DigitalClock.css";

// components
import DigitalClock from "../src/components/DigitalClock";

class App extends React.Component {
  static async getInitialProps() {
    return {
      time: new Date().toISOString(),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().toISOString(),
      };
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <DigitalClock time={this.state.time} />;
  }
}

export default App;
