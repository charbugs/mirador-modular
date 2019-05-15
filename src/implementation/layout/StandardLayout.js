import React from 'react'
import { StandardLayout } from '../../mirador/layout/components/StandardLayout'
import TopBar from '../panels/TopBar'

function StandardLayoutImpl(props) {
  return <StandardLayout
    top={<TopBar />}
    main={<div>main</div>}
  />
}

export default StandardLayoutImpl
