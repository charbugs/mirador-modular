import { fetchManifest } from './state/manifests'
import { createWindow } from './state/windows'
import { createElasticWindow } from './state/elastic'
import { createWindowLayout } from './state/layouts'

export function initStore(store) {
  const url = 'https://data.ucd.ie/api/img/manifests/ucdlib:33064'
  store.dispatch(fetchManifest(url))
    .then(action => {
        const manifestId = action.payload.id
        const elasticId = store.dispatch(createElasticWindow()).payload.id
        const layoutId = store.dispatch(createWindowLayout()).payload.id
        store.dispatch(createWindow({ manifestId, layoutId, elasticId }))
    })
}
