import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as jPlayers } from 'react-jplayer'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Styles the jPlayer to look nice
import 'react-jplayer/src/less/skins/sleek.less'
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplayer/src/less/controls/iconControls.less'

/* Pass the jPlayer reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers }))

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
