export const welcomeReducer = (state = "hello", action) => {
  if (action.type === 'SET_WELCOME') {
    return action.payload.text
  }
  return state
}
