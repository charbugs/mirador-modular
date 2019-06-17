import React from 'react'
import PropTypes from 'prop-types'

import { LoaderLayout } from '../components/LoaderLayout'
import { ManifestInput} from '../components/ManifestInput'
import { ManifestList } from '../components/ManifestList'

export function Loader({ manifestInfos, onManifestClick, onLoadClick  }) {
  return <LoaderLayout
    input={<ManifestInput
      onLoadClick={onLoadClick}
    />}
    list={<ManifestList
      items={manifestInfos}
      onItemClick={onManifestClick}
    />}
  />
}

Loader.propTypes = {
  manifestInfos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string
  }))
}

Loader.defaultProps = {
  manifestInfos: []
}
