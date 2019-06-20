import { fetchManifest } from './state/manifests'
import { createWindow } from './state/windows'
import { createElasticWindow } from './state/elastic'
import { createWindowLayout } from './state/layouts'

/**
* Create a window with an example manifest
*/
export function initStore(store) {
  const url = 'https://media.nga.gov/public/manifests/nga_highlights.json'
  store.dispatch(fetchManifest(url))
    .then(action => {
        const manifestId = action.payload.id
        const elasticId = store.dispatch(createElasticWindow()).payload.id
        const layoutId = store.dispatch(createWindowLayout()).payload.id
        store.dispatch(createWindow({ manifestId, layoutId, elasticId }))
    })
}
