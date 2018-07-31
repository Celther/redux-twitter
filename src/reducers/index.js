import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'

export default combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer,
})
