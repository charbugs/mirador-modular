import uuid from 'uuid/v4'

function layouts(state = {}, action) {
  switch (action.type) {
    case 'CREATE_WINDOW':
      return {
        ...state,
        [uuid()]: {
          windowId: action.payload.windowId,
          manifestId: action.payload.manifestId,
        }
      }
    default:
      return state
  }
}

export { layouts as reducer }
