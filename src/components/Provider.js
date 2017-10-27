import { Component, Children } from 'react';
import PropTypes from 'prop-types';

/**
 * Создает экземпляр контекста хранилища
 *
 * @returns {Provider}
 */
class Provider extends Component {

  static childContextTypes = {
    mainStore: PropTypes.object
  };

  getChildContext() {
    return {
      mainStore: {
        nameSpaceA: {
          count: 1,
        }
      }
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
