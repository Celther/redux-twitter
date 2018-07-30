import React, { Component } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import { handleToggleLike } from '../actions/tweets'

import replyArrow from '../media/reply.svg'
import heart from '../media/heart.svg'

class Tweet extends Component {
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

  likeTweet = (info) => {
    this.props.dispatch(handleToggleLike(info))
  }

  render() {
    const { tweets, users, authedUser } = this.props
    const { text, replyingTo, timestamp, likes, replies } = tweets[this.props.id]
    const author = users[tweets[this.props.id].author]
    const hasLiked = likes.includes(authedUser)
    let likeButtonClass = classNames('like-button', { 'liked': hasLiked })

    return (
      <li>
        <div className="tweet">
          <img
            src={author.avatarURL}
            alt={`${author.name}'s Avatar`}
            className="avatar"
          />
          <div className="tweet-details">
            <div className="tweet-header">
              <h3>{author.name}</h3>
              <div>{this.formatTimestamp(timestamp)}</div>
              {replyingTo
                && <button>
                  Replying to @{tweets[replyingTo].author}
                  {/* // TODO: Link to replyingTo Tweet with Router */}
                </button>
              }
              <p>{text}</p>
            </div>
            
            <div className="tweet-icons">
              <img src={replyArrow} alt="Reply to Tweet" />
              {/* // TODO: Add Link from router */}
              <span>{replies.length > 0 ? replies.length : null}</span>
              <button
                className={likeButtonClass}
                onClick={() => this.likeTweet({ id: this.props.id, authedUser, hasLiked })}
              >
                <img src={heart} alt="Like Tweet Icon" />
              </button>
              <span>{likes.length > 0 ? likes.length : null}</span>
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
