import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      "time": new Date
    }
  }

  tick() {
    // setInterval(code, delay)
  }

  handleHours() {
    let hrs = this.state.time.getHours() % 12
    return hrs === 0 ? '12' : hrs
  }
  
  handleMeridian() {
    let hrs = this.state.time.getHours()
    return hrs < 12 ? 'AM' : 'PM';
  }

  handleMinutes() {
    return this.state.time.getMinutes();
  }

  handleSeconds() {
    return this.state.time.getSeconds()
  }

  padZeroes(num) {
    return num < 10 ? '0' + num : num;
  }

  
  render() {
    let time = this.state.time;
    let hrs = this.padZeroes(this.handleHours());
    let mins = this.padZeroes(this.handleMinutes());
    let secs = this.padZeroes(this.handleSeconds());
    let meridian = this.handleMeridian();
    return (
      <div>
        <h2>{hrs}:{mins} {secs} {meridian}</h2>
      </div>
    )
  }
}

export default Clock;