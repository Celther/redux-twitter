import React, { Component } from 'react'
import { connect } from 'react-redux'

class Tweet extends Component {
  likeTweet = () => {
    console.log('I loike it');
  }

  render() {
    const { tweets, users, authedUser } = this.props
    const { text, replyingTo, timestamp, likes } = tweets[this.props.id]
    const author = users[tweets[this.props.id].author]

    const tweetDate = new Date(timestamp)
    const formattedDate = `${tweetDate.getDate()}/${tweetDate.getMonth()}/${tweetDate.getFullYear()}`
    const formattedTime = () => {
      const minutes = (0 + tweetDate.getMinutes()).slice(-2)
      const hours = tweetDate.getHours()

      return hours > 12
        ? `${hours % 12}:${minutes}PM`
        : `${hours}:${minutes}AM`
    }

    return (
      <li className="tweet" key={this.props.id}>
        <img
          ref={author.avatarURL}
          alt={`${author.name}'s Avatar`}
        />
        <span>
          <div className="author-details">
            <h3>{author.name}</h3>
            <p>{formattedTime()}</p><span>|</span>
            <p>{formattedDate}</p>
            {replyingTo && <p>{replyingTo}</p>}
          </div>
          <div className="tweet-body">
            <p>{text}</p>
          </div>
          <div>
            <button className="reply-button">
              <img href="" alt="Reply to Tweet" />
                // TODO: Add Link from router
            </button>
            <button className="like-button" onClick={this.likeTweet}>
              <img href="" alt="Like Tweet Icon" />
              // TODO: Add Link from router
            </button>
          </div>
        </span>
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
