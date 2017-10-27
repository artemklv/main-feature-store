import React, { PureComponent } from 'react'
import { MainProvider } from '../src/index'
import DisplayMainStore from './components/DisplayMainStore'

class Application extends PureComponent {

  render() {
    return <div className="application">
      <h1>Elama feature development</h1>
      <MainProvider>
        <DisplayMainStore/>
      </MainProvider>
    </div>
  }
}

export default Application;
