import React from 'react'
import ReactSidebar from 'react-sidebar'

import Header from '../Header'
import Content from './sidebar-content'
import styles from './style.module.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: true,
      open: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
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

  toggleOpen(open) {
    this.setState({ open })
  }

  mediaQueryChanged() {
    this.setState({ docked: this.state.mediaQueryListener.matches })
  }

  render() {
    return (
      <ReactSidebar
        sidebar={<Content toggleSidebar={this.toggleOpen} />}
        open={this.state.open}
        docked={this.state.docked}
        onSetOpen={this.toggleOpen}
      >
        <Header toggleSidebar={this.toggleOpen} />
        <div className={styles['content-wrapper']}>
          {this.props.children}
        </div>
      </ReactSidebar>
    )
  }
}
