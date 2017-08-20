import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

export default function PostTitle(props) {
  return (
    <div className={styles.title}>
      <div>
        <h1>
          {props.post.frontmatter.title}
        </h1>
      </div>
      <p className={styles.subtitle}>
        <i>
          {props.post.frontmatter.date}
        </i>
      </p>
      <span className={styles.subtitleSeparator}> - </span>
      <p className={styles.subtitle}>
        <i>
          {props.post.timeToRead} minute read
        </i>
      </p>
    </div>
  )
}

PostTitle.propTypes = {
  post: PropTypes.shape({
    post: PropTypes.object,
  }),
}
