import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainConnect } from '../../src/index';

class DisplayMainStore extends Component {

  static propTypes = {
    mainStore: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
    return <div>Test</div>
  }
}

export default MainConnect(DisplayMainStore);
