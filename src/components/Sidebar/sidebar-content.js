import React from 'react'
import GatsbyLink from 'gatsby-link'

import styles from './style.module.css'

export default (
  <div className={styles.background}>
    <h1 className={styles.title}> Some Posts </h1>
    <h4 className={styles.subtitle}> by Matt Dean </h4>
    <ul className={styles.list}>
      <li>
        <GatsbyLink to={'/'} className={styles.link}>
          <h3>Blog</h3>
        </GatsbyLink>
      </li>
      <li>
        <a className={styles.link} href="https://www.linkedin.com/in/deanmatt/">
          <h3>About</h3>
        </a>
      </li>
      <li>
        <a className={styles.link} href="https://github.com/mattdean1">
          <h3>Portfolio</h3>
        </a>
      </li>
    </ul>
    <div>
      <a href="https://github.com/mattdean1" target="_blank" rel="noopener noreferrer">
        {/* <GithubIcon /> */}
      </a>
      <a href="https://twitter.com/TerseTweet" target="_blank" rel="noopener noreferrer">
        {/* <TwitterIcon /> */}
      </a>
      <a href="https://www.linkedin.com/in/deanmatt" target="_blank" rel="noopener noreferrer">
        {/* <LinkedinIcon /> */}
      </a>
    </div>
  </div>
)
