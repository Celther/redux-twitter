import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Nav'
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
      <Router>
        <Fragment>
          <Nav />
          <div className="app-container">
            {
              this.props.loading ? null : (
                <div>
                  <Route exact path="/" component={Timeline} />
                  <Route path="/new" component={ComposeTweet} />
                  <Route path="/view/:id" component={ViewTweet} />
                </div>
              )
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null
  }
}

export default connect(mapStateToProps)(App)
