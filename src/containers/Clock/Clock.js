import React, { Component } from 'react';

import './Clock.less';

export default class Clock extends Component {

  state = {
    secondsDegrees: 0,
    minsDegrees: 0,
    hourDegrees: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.setDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;

    this.setState({
      secondsDegrees,
      minsDegrees,
      hourDegrees
    });
  }

  render() {
    const { secondsDegrees, minsDegrees, hourDegrees } = this.state;

    return (
      <div className="container">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
            <div className="hand min-hand" style={{ transform: `rotate(${minsDegrees}deg)` }} />
            <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
          </div>
        </div>
      </div>
    );
  }
}
