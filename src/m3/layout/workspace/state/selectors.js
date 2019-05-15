
export function getItemsByPosition(state) {
  return Object.values(state.workspaceLayout)
    .reduce((acc, item) => {
      if (!item.visible) {
        return acc
      }
      const existing = acc[item.position] || []
      return { ...acc, [item.position]: [ ...existing, item ] }
    }, {})
}
