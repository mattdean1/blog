import React from 'react'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

import ResponsiveImage from './ResponsiveImage'

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
    <div key={post.id} style={{ position: 'relative' }}>
      <div
        style={{
          height: '100%',
          width: '35%',
          display: 'inline-block',
        }}
      >
        {responsiveImageData && <ResponsiveImage imgData={responsiveImageData} />}
      </div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '15px',
          wordWrap: 'break-word',
        }}
      >
        <h1>
          <GatsbyLink to={post.frontmatter.path}>
            {post.frontmatter.title}
          </GatsbyLink>
        </h1>
        <span>
          {post.frontmatter.date}
        </span>
        <span>
          {' - '}
          {post.timeToRead} minute read
        </span>
        <p>
          {post.frontmatter.summary}
        </p>
      </div>
    </div>
  )
}

PostListing.propTypes = {
  post: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}
