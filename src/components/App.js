import React, { Component } from 'react'
import { connect } from 'react-redux'

import Timeline from './Timeline'
import ComposeTweet from './ComposeTweet'
import handleInitialData from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <div className="app-container">
          <ComposeTweet />
          <Timeline />
        </div>
      </div>
    )
  }
}

export default connect()(App)
