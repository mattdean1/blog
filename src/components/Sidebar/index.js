import React from 'react'
import ReactSidebar from 'react-sidebar'

import sidebarContent from './sidebar-content'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: true,
      open: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetopen = this.onSetopen.bind(this)
  }

  componentWillMount() {
    let mediaQueryListener
    if (typeof window !== 'undefined') {
      mediaQueryListener = window.matchMedia('(min-width: 800px)')
      mediaQueryListener.addListener(this.mediaQueryChanged)
      this.setState({ mediaQueryListener, docked: mediaQueryListener.matches })
    }
  }

  componentWillUnmount() {
    this.state.mediaQueryListener.removeListener(this.mediaQueryChanged)
  }

  onSetopen(open) {
    this.setState({ open })
  }

  mediaQueryChanged() {
    this.setState({ docked: this.state.mediaQueryListener.matches })
  }

  render() {
    return (
      <ReactSidebar
        sidebar={sidebarContent}
        open={this.state.open}
        docked={this.state.docked}
        onSetOpen={this.onSetopen}
      >
        {this.props.children}
      </ReactSidebar>
    )
  }
}
