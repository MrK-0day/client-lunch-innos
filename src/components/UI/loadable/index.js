// import React from 'react'
import Loadable from 'react-loadable'

const UILoadable = (componentImport, loading = null) => {
  return Loadable({
    loader: () => componentImport,
    loading: () => loading
  })
}

export { UILoadable }
