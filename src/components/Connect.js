import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default function connectHOC(WrappedComponent) {

  return class Connect extends Component {
    static contextTypes = {
      mainStore: PropTypes.object,
    };
    render() {
      const { mainStore } = this.context;
      return <WrappedComponent {...this.props} mainStore={mainStore} />
    }
  }
}
