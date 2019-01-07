import React from 'react'

import { WrappedUILoginForm } from '../../components/UI/form/login'
import './index.scss'
import background from '../../assets/images/background.jpeg'

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url('${background}')`
          }}
          className='animated fadeIn background'
        />
        <div className='animated fadeInDownBig boxPanel'>
          <div className='panel'>
            <WrappedUILoginForm
              onLogin={(values) => console.log(values)}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
