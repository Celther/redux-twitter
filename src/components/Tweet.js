import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import classNames from 'classnames'
import { handleToggleLike } from '../actions/tweets'

import replyArrow from '../media/reply.svg'
import heart from '../media/bw-heart.png'
import redHeart from '../media/red-heart.png'

class Tweet extends Component {
  formatTimestamp = (timestamp) => {
    const tweetDate = new Date(timestamp)
    const formattedDate = `${tweetDate.getDate()}/${tweetDate.getMonth() + 1}/${tweetDate.getFullYear()}`
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

    return (
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
            {replyingTo &&
              (
                <NavLink to={`/view/${replyingTo}`}>
                  <button>
                    Replying to @{tweets[replyingTo].author}
                  </button>
                </NavLink>
              )
            }
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <NavLink to={`/view/${this.props.id}`}>
              <img src={replyArrow} alt="Reply to Tweet" />
            </NavLink>
            <span>{replies.length > 0 ? replies.length : null}</span>
            <button
              className="like-button"
              onClick={() => this.likeTweet({ id: this.props.id, authedUser, hasLiked })}
            >
              <img src={heart} alt="Like Tweet Icon" />
              <img
                src={redHeart}
                alt="Liked Tweet Icon"
                className={classNames('liked-heart', { 'liked': hasLiked })}
              />
              <span />
            </button>
            <span>{likes.length > 0 ? likes.length : null}</span>
          </div>
        </div>
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

export default connect(mapStateToProps)(Tweet)
