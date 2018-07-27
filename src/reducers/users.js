import { RECEIVE_USERS } from '../actions/users'
import { ADD_TWEET } from '../actions/tweets'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_TWEET: {
      const { id, author } = action.tweet
      const user = state[author]
      return {
        ...state,
        [author]: {
          ...user,
          tweets: user.tweets.concat([id])
        }
      }
    }
    default:
      return state
  }
}
