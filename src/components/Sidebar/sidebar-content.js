import React from 'react'
import Link from 'gatsby-link'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'

import styles from './style.module.css'

export default (
  <div className={styles.background}>
    <section className={styles.section}>
      <Link to={'/'}>
        <h1 className={styles.title}> Some Posts </h1>
        <h4 className={styles.subtitle}> by Matt Dean </h4>
      </Link>
    </section>
    <section className={styles.section}>
      <ul className={styles.linkList}>
        <li>
          <a className={styles.link} href="https://www.linkedin.com/in/deanmatt/">
            <h3>About</h3>
          </a>
        </li>
        <li>
          <Link to={'/'} className={styles.link}>
            <h3>Blog</h3>
          </Link>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/mattdean1">
            <h3>Portfolio</h3>
          </a>
        </li>
      </ul>
    </section>
    <section className={styles.section}>
      <div className={styles.icons}>
        <a href="https://github.com/mattdean1" target="_blank" rel="noopener noreferrer">
          <GithubIcon className={styles.icon} size={30} />
        </a>
        <a href="https://twitter.com/TerseTweet" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className={styles.icon} size={30} />
        </a>
        <a href="https://www.linkedin.com/in/deanmatt" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className={styles.icon} size={30} />
        </a>
      </div>
    </section>
  </div>
)
