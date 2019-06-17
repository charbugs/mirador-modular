import React from 'react'
import PropTypes from 'prop-types'
import { CatalogLayout } from './CatalogLayout'
import { ManifestInput } from './ManifestInput'
import { ManifestList } from './ManifestList'


export function Catalog({ manifestInfos, onManifestClick, onLoadClick  }) {
  
  const input = <ManifestInput onLoadClick={onLoadClick} />

  const list = <ManifestList
    manifestInfos={manifestInfos}
    onManifestClick={onManifestClick}
  />

  return <CatalogLayout input={input} list={list} />
}
