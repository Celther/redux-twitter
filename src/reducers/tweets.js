import { RECEIVE_TWEETS, ADD_TWEET, TOGGLE_LIKE } from '../actions/tweets'

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    case ADD_TWEET: {
      const { id, replyingTo } = action.tweet

      return replyingTo
        ? {
            ...state,
            [id]: action.tweet,
            [replyingTo]: {
              ...state[replyingTo],
              replies: state[replyingTo].replies.concat([id])
            }
          }
       :  {
            ...state,
            [id]: action.tweet,
          }
    }
    case TOGGLE_LIKE: {
      try {
        const { id, authedUser } = action
        const tweet = state[id]

        return {
          ...state,
          [id]: {
            ...tweet,
            likes: tweet.likes.includes(authedUser)
              ? tweet.likes.filter((user) => user !== authedUser)
              : tweet.likes.concat([authedUser])
          }
        }
      } catch (e) {
        return console.error('There was an Error:', e);
      }
    }
    default:
      return state
  }
}
