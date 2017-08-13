import React from 'react'
import GatsbyLink from 'gatsby-link'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) =>
        (<div key={post.id}>
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
        </div>),
      )}
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
        }
      }
    }
  }
`
