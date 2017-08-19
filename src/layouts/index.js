import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

require('prismjs/themes/prism-okaidia.css')

export default function Template(props) {
  const { location } = props
  const isRoot = location.pathname === '/'

  return (
    <div>
      <Helmet title="Some Posts" />
      <div
        style={{
          backgroundColor: '#2d303b',
          width: '260px',
          position: 'relative',
          height: '100%',
        }}
      />
      <Sidebar>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: '1em',
          }}
        >
          {props.children()}
        </div>
      </Sidebar>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.func,
}
