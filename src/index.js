import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'

import App from './components/App'
import reducers from '../reducers'
import middleware from '../middleware'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
