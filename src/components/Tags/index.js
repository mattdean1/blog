import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import styles from './style.module.css'

export default function Tags({ list = [] }) {
  return (
    <ul>
      {list.map(tag =>
        (<Link className={styles.tag} to={`/tags/${tag}`} key={tag}>
          <li>
            {tag}
          </li>
        </Link>),
      )}
    </ul>
  )
}

Tags.Proptypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}
