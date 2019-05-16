import React from 'react'
import { Loader } from '../../m3/loader/Loader'
import ManifestInput from './ManifestInput'
import ManifestList from './ManifestList'

function LoaderCtrl(props) {
  return <Loader
    input={<ManifestInput />}
    list={<ManifestList />}
  />
}

export default LoaderCtrl
