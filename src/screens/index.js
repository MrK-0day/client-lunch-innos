import React from 'react'
import { observer, inject } from 'mobx-react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { UILoadable } from '../components/UI/loadable'
import { UIHeader } from '../components/UI/header'
import 'antd/dist/antd.css'
import '../assets/css/animate.css'
import './index.scss'

const LoadingLogin = UILoadable(import('./login'))

@inject('store')
@observer
class Screens extends React.Component {
  render () {
    const { isLogin } = this.props.store.Authen
    console.log(isLogin)
    return (
      <React.Fragment>
        <UIHeader
          title='Lunch Innos'
        />
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' render={(props) => {
              return (
                <React.Fragment>
                  <LoadingLogin {...props} />
                </React.Fragment>
              )
            }} />
            <Redirect to='/login' />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Screens
