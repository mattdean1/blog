import React from 'react'

import PostListing from '../components/PostListing'

const removeDraftPosts = (post) => {
  const frontmatter = post.node.frontmatter
  return frontmatter.draft !== 'true' && frontmatter.title.length > 0
}

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges
  const images = data.allImageSharp.edges

  return (
    <div>
      {posts
        .filter(removeDraftPosts)
        .map(({ node: post }) => <PostListing post={post} images={images} />)}
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
