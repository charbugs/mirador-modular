import React from 'react'
import { connect } from 'react-redux'
import { Window } from '../../mirador/elastic/components/Window'
import { StandardLayout } from '../../mirador/content/components/StandardLayout'


function Windows({ windows, contents }) {

  function renderLayout(contentId) {
    const type = contents[contentId].type
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
        { renderLayout(win.contentId) }
      </Window>

    )
  }

  return <> { Object.values(windows).map(win => renderWindow(win)) } </>
}

const mapStateToProps = state => ({
  windows: state.windows,
  contents: state.contents,
})

export default connect(mapStateToProps, null)(Windows)
