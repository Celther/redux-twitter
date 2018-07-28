import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timeline extends Component {
  render() {
    const tweetIds = Object.keys(this.props.tweets)

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
          {/* {tweetIds.map()} */}
        </ul>
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
