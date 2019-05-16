
export function getItemsByPosition(layout) {
  return Object.values(layout)
    .reduce((acc, item) => {
      if (!item.visible) {
        return acc
      }
      const existing = acc[item.position] || []
      return { ...acc, [item.position]: [ ...existing, item ] }
    }, {})
}
