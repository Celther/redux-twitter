import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

export default composeWithDevTools(applyMiddleware(
  ReduxThunk
))
