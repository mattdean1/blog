import React from 'react'
import PropTypes from 'prop-types'

import Hamburger from 'react-icons/lib/fa/bars'
import styles from './style.module.css'

export default function Header(props) {
  return (
    <div className={styles.wrapper}>
      <Hamburger
        className={styles.hamburger}
        size={'2em'}
        onClick={e => props.toggleSidebar(true)}
      />
    </div>
  )
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
}
Header.defaultProps = {}
