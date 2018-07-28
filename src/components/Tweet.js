import React, { Component } from 'react'
import { connect } from 'react-redux'

class Tweet extends Component {
  componentDidMount() {

  }

  formatTimestamp = (timestamp) => {
    const tweetDate = new Date(timestamp)
    const formattedDate = `${tweetDate.getDate()}/${tweetDate.getMonth()}/${tweetDate.getFullYear()}`
    const minutes = ('0' + tweetDate.getMinutes()).slice(-2)
    const hours = tweetDate.getHours()
    const formattedTime = hours > 12
      ? `${hours % 12}:${minutes}PM`
      : `${hours}:${minutes}AM`

    return `${formattedTime} | ${formattedDate}`
  }

  likeTweet = () => {
    console.log('I loike it');
  }

  render() {
    const { tweets, users, authedUser } = this.props
    const { text, replyingTo, timestamp, likes } = tweets[this.props.id]
    const author = users[tweets[this.props.id].author]

    return (
      <li>
        <div className="tweet">
          <img
            src={author.avatarURL}
            alt={`${author.name}'s Avatar`}
            className="avatar"
          />
          <div className="tweet-details">
            <div>
              <h3>{author.name}</h3>
              <div>{this.formatTimestamp(timestamp)}</div>
              {replyingTo
                && <button>Replying to @{tweets[replyingTo].author}</button>
              }
              <p>{text}</p>
            </div>

            <div className="tweet-icons">
              <button className="reply-button">
                <img src="" alt="Reply to Tweet" />
                // TODO: Add Link from router
              </button>
              <button className="like-button" onClick={this.likeTweet}>
                <img src="" alt="Like Tweet Icon" />
              </button>
            </div>
          </div>
        </div>
      </li>
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

export default connect(mapStateToProps)(Tweet)
