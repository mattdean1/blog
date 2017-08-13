import React from 'react'
import GatsbyLink from 'gatsby-link'

import HeroImage from '../components/HeroImage'

const removeDraftPosts = (post) => {
  const frontmatter = post.node.frontmatter
  return frontmatter.draft !== 'true' && frontmatter.title.length > 0
}

const getHeroImage = (post, images) => {
  const imagePathRegex = post.fileAbsolutePath.replace('index.md', 'hero')
  const filteredImages = images.filter(image => image.node.id.match(imagePathRegex))
  if (filteredImages.length > 0) {
    return filteredImages[0].node.responsiveSizes
  }
  return false
}

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  const images = data.allImageSharp.edges

  return (
    <div>
      {posts.filter(removeDraftPosts).map(({ node: post }) => {
        const heroImageData = getHeroImage(post, images)
        return (
          <div key={post.id}>
            <div style={{ width: '200px', display: 'inline-block' }}>
              {heroImageData && <HeroImage imgData={heroImageData} />}
            </div>
            <div style={{ display: 'inline-block', marginLeft: '15px' }}>
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
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            summary
          }
          timeToRead
          fileAbsolutePath
        }
      }
    }
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            id
            responsiveSizes {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
