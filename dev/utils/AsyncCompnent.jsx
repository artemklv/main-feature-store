import React, { Component } from 'react'

/**
 *
 * @param importComponent
 * @returns {{}}
 */
export default function asyncComponent(importComponent) {
  return class AsyncComponent extends Component {

    constructor() {
      super(...arguments)
      this.state = {
        isError: false,
        loadedComponent: null,
      }
    }

    componentDidMount() {
      importComponent()
        .then(resp => {
          this.setState({
            LoadedComponent: resp.default,
          })
        })
        .catch(error => {
          console.warn(error);
          this.setState({
            isError: true,
          })
        });
    }

    render() {
      const { LoadedComponent, isError } = this.state;
      if (isError) {
        return <div><h3>Can't load component</h3></div>
      }
      if (!LoadedComponent) {
        return null;
      }
      return <LoadedComponent {...this.props} />
    }

  }
}
