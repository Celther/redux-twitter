import React, { Component } from 'react'
import { connect } from 'react-redux'

import Timeline from './Timeline'
import ComposeTweet from './ComposeTweet'
import ViewTweet from './ViewTweet'
import handleInitialData from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <div className="app-container">
          {this.props.authedUser
            ? <div>
              <ViewTweet match={{params:{ id: 'hbsc73kzqi75rg7v1e0i6a' }}}/>
              <ComposeTweet />
              <Timeline />
            </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default connect((state) => ({ authedUser: state.authedUser }))(App)
