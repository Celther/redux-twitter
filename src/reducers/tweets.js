import { RECEIVE_TWEETS, ADD_TWEET, TOGGLE_LIKE } from '../actions/tweets'

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return action.tweets
    case ADD_TWEET:
      const { id } = action.tweet
      return {
        ...state,
        [id]: action.tweet,
      }
    case TOGGLE_LIKE:
      return {
        ...state,
        
      }
    default:
      return state
  }
}
