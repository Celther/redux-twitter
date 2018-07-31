import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tweet from './Tweet'

class Timeline extends Component {
  render() {
    const { tweetIds } = this.props

    return (
      <div className="container">
        <h2>Timeline</h2>
        <ul>
          {tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { tweets } = state
  const tweetIds = Object.keys(tweets)
    .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)

  return {
    tweetIds,
  }
}

export default connect(mapStateToProps)(Timeline)
