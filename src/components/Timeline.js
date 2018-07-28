import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        Timeline
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { tweets, users, authedUser } = state
  return {
    tweets,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Timeline)
