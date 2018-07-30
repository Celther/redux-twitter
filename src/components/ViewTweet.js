import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tweet from './Tweet'
import ComposeTweet from './ComposeTweet'

class ViewTweet extends Component {
  render() {
    const { tweets, id, replies = [] } = this.props

    return (
      <div className="container">
        <Tweet id={id} />
        <ComposeTweet />
        <ul>
          {replies.map((tweet) => (
            <Tweet id={tweets[tweet].id} key={tweets[tweet].id} />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, { match }) {
  const { id } = match.params
  const { tweets } = state
  let { replies } = tweets[id]

  replies.sort((a, b) => state.tweets[b].timestamp - state.tweets[a].timestamp)

  return {
    tweets,
    replies,
    id,
  }
}

export default connect(mapStateToProps)(ViewTweet)
