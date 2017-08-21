import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import BackIcon from 'react-icons/lib/fa/chevron-left'
import ForwardIcon from 'react-icons/lib/fa/chevron-right'

export default function PostPrevNext(props) {
  const { prev, next } = props
  return (
    <div>
      {prev &&
        <Link to={prev.frontmatter.path}>
          <BackIcon /> {prev.frontmatter.title}
        </Link>}
      {prev && next && ' - '}
      {next &&
        <Link to={next.frontmatter.path}>
          {next.frontmatter.title} <ForwardIcon />
        </Link>}
    </div>
  )
}
