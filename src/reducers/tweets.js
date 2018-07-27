import { RECEIVE_TWEETS, ADD_TWEET, TOGGLE_LIKE } from '../actions/tweets'

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return action.tweets
    case ADD_TWEET: {
      const { id } = action.tweet
      return {
        ...state,
        [id]: action.tweet,
      }
    }
    case TOGGLE_LIKE: {
      const { id, likes, authedUser } = action
      const tweet = state[id]
      return {
        ...state,
        [id]: {
          ...tweet,
          likes: tweet.likes.contains(authedUser)
            ? tweet.filter((user) => user !== authedUser)
            : tweet.concat(authedUser)
        }
      }
    }
    default:
      return state
  }
}
