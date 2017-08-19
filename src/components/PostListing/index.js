import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import ResponsiveImage from '../ResponsiveImage'
import styles from './style.module.css'

const getPostImage = (post, images) => {
  const imagePathRegex = post.fileAbsolutePath.replace('index.md', 'hero')
  const filteredImages = images.filter(image => image.node.id.match(imagePathRegex))
  if (filteredImages.length > 0) {
    return filteredImages[0].node.responsiveSizes
  }
  return false
}

export default function PostListing(props) {
  const { post, images } = props
  const responsiveImageData = getPostImage(post, images)
  return (
    <div className={styles.grid}>
      <Link to={post.frontmatter.path}>
        <div className={styles.image}>
          {responsiveImageData && <ResponsiveImage imgData={responsiveImageData} />}
        </div>
      </Link>
      <Link to={post.frontmatter.path}>
        <h2 className={styles.title}>
          {post.frontmatter.title}
        </h2>
        <p className={styles.date}>
          <i>
            {post.frontmatter.date}
          </i>
        </p>
        <p>
          {post.frontmatter.summary}
        </p>
      </Link>
    </div>
  )
}

PostListing.propTypes = {
  post: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}
