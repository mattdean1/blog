import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

require('prismjs/themes/prism-okaidia.css')

export default function Template(props) {
  const { location } = props
  const isRoot = location.pathname === '/'

  return (
    <div>
      <Helmet title="Some Posts" />
      <Sidebar>
        {props.children()}
      </Sidebar>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.func,
}
