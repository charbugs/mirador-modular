
export function getItemsByPosition(state) {
  return Object.values(state.workspaceLayout)
    .reduce((acc, item) => {
      const existing = acc[item.position] || []
      return { ...acc, [item.position]: [ ...existing, item ] }
    }, {})
}
