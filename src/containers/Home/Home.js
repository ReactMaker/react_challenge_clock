import React, { Component } from 'react';
import Clock from '../Clock/Clock';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Clock />
      </div>
    );
  }
}
