import React from 'react'
import { connect } from 'react-redux'
import { Window } from '../../mirador/elastic/components/Window'
import StandardLayout from '../layout/StandardLayout'


function Windows({ windows, layouts }) {

  function renderLayout(layoutId) {
    const type = layouts[layoutId].type
    if (type === 'standard')
      return <StandardLayout />
  }

  function renderWindow(win) {
    return (
      <Window
        key={win.id}
        windowId={win.id}
        position={{ x: win.x, y: win.y, w: win.w, h: win.h }}
      >
        { renderLayout(win.layoutId) }
      </Window>

    )
  }

  return <> { Object.values(windows).map(win => renderWindow(win)) } </>
}

const mapStateToProps = state => ({
  windows: state.windows,
  layouts: state.layouts,
})

export default connect(mapStateToProps, null)(Windows)
