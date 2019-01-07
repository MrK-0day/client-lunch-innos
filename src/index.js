import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import * as serviceWorker from './serviceWorker'

import Screens from './screens'
import { RootMobx } from './tools/mobx'
const store = new RootMobx()
ReactDOM.render(
  <Provider store={store}>
    <Screens />
  </Provider>  
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
