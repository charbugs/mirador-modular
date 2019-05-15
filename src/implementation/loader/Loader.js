import React from 'react'
import { Loader} from '../../mirador/components//loader/Loader'
import ManifestInput from './ManifestInput'
import ManifestList from './ManifestList'

function LoaderImpl(props) {
  return (
    <Loader
      input={<ManifestInput/>}
      list={<ManifestList />}
    />
  )
}

export default LoaderImpl
