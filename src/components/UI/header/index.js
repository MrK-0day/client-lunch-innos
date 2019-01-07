import React from 'react'
import { Helmet } from 'react-helmet'

import logo from '../../../assets/images/logo.png'
const UIHeader = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel='shortcut icon' type='image/png' href={logo} />
      <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' />
    </Helmet>
  )
}

export { UIHeader }
