import React from 'react'
import Helmet from 'react-helmet'
import BackIcon from 'react-icons/lib/fa/chevron-left'
import ForwardIcon from 'react-icons/lib/fa/chevron-right'

import Link from '../components/Link'
import Tags from '../components/Tags'
import ResponsiveImage from '../components/ResponsiveImage'

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} · Some Posts`} />
      <div>
        {data.responsiveImage ? <ResponsiveImage imgData={data.responsiveImage.responsiveSizes} /> : null}
        <h1>
          {post.frontmatter.title}
        </h1>
        <h2>
          {post.frontmatter.date}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Tags list={post.frontmatter.tags || []} />
        <div>
          {prev &&
            <Link to={prev.frontmatter.path}>
              <BackIcon /> {prev.frontmatter.title}
            </Link>}
          {' - '}
          {next &&
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title} <ForwardIcon />
            </Link>}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $responsiveImageFilePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
    responsiveImage: imageSharp(id: { regex: $responsiveImageFilePath }) {
      responsiveSizes {
        aspectRatio
        base64
        src
        srcSet
        sizes
      }
    }
  }
`
