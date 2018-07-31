import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddTweet } from '../actions/tweets'

class ComposeTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const { value } = e.target

    this.setState(() => ({
      text: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { author, replyId } = this.props

    if (!replyId) {
      this.props.history.push('/')
    }
    this.props.dispatch(handleAddTweet({
      text: this.state.text,
      author,
      replyingTo: replyId,
    }))
  }

  isDisabled = () => {
    return this.state.text === ''
  }

  render() {
    return (
      <div className="container">
        <h3>Compose new Tweet</h3>
        <form>
          <textarea
            placeholder="What are you thinking?"
            value={this.state.text}
            onChange={this.handleChange}
            autoFocus
          />
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn"
            disabled={this.isDisabled()}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    author: state.authedUser,
  }
}

export default connect(mapStateToProps)(ComposeTweet)
