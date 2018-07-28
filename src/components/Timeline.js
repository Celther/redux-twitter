import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timeline extends Component {
  createTweets = (id) => {
    const { tweets, users, authedUser } = this.props
    const { text, replyingTo, timestamp, likes } = tweets[id]
    const author = users[tweets[id].author]
    const date = new date(timestamp)
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const formattedTime = date.getHours() > 12
      ? `${date.getHours()%12}:${date.getMinutes()}PM`
      : `${date.getHours()}:${date.getMinutes()}AM`

    return (
      <li className="tweet" key={id}>
        <img
          ref={author.avatarURL}
          alt={`${author.name}'s Avatar`}
        />
        <span>
          <div className="author-details">
            <h3>{author.name}</h3>
            <p>{formattedTime}</p><span>|</span>
            <p>{formattedDate}</p>
            {replyingTo && <p>{replyingTo}</p>}
          </div>
        </span>
      </li>
    )
  }

  render() {
    const { tweets, users, authedUser } = this.props
    const tweetIds = Object.keys(tweets)

    const date = new Date(Date.now())
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    const formattedTime = date.getHours() > 12
      ? `${date.getHours()%12}:${date.getMinutes()}PM`
      : `${date.getHours()}:${date.getMinutes()}AM`

    return (
      <div className="timeline-container">
        <h1>Timeline</h1>
        <ul>
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
          {tweetIds.map(this.createTweets)}
        </ul>
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
