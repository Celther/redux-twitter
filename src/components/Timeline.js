import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tweet from './Tweet'

class Timeline extends Component {
  render() {
    const tweetIds = Object.keys(this.props.tweets)

    return (
      <div>
        <h2 className="center">Timeline</h2>
        <div className="timeline-container">
          <ul>
            {tweetIds.map((id) => (
              <Tweet id={id} key={id}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { tweets } = state
  return {
    tweets,
  }
}

export default connect(mapStateToProps)(Timeline)
