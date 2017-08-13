import React from 'react'
import ReactSidebar from 'react-sidebar'

import sidebarContent from './sidebar-content'

const mql = window.matchMedia('(min-width: 800px)')

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mql,
      docked: true,
      open: true,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql, sidebarDocked: mql.matches })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches })
  }

  render() {
    return (
      <ReactSidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        {this.props.children}
      </ReactSidebar>
    )
  }
}
