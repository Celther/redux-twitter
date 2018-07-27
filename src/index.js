import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'

import App from './components/App'
import reducers from '../reducers'

const store = createStore(reducers)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
