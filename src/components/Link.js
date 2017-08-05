import React from 'react'
import GatsbyLink from 'gatsby-link'

export default function Link({ children, to }) {
  return (
    <GatsbyLink to={to}>
      {children}
    </GatsbyLink>
  )
}
