import React from 'react'
import Link from 'gatsby-link'

import HomeIcon from 'react-icons/lib/fa/home'
import TagsIcon from 'react-icons/lib/fa/tags'

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with '{tag}'
        </h1>
        <ul style={{ listStyle: 'none' }}>
          {post.map(({ id, frontmatter }) =>
            (<li key={id}>
              <h1>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h1>
              <p>
                {frontmatter.summary}
              </p>
            </li>),
          )}
        </ul>
        <Link to="/tags">
          <TagsIcon /> All tags
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul style={{ listStyle: 'none' }}>
        {Object.keys(posts).sort().map(tagName => (
          <li key={tagName}>
            <Link to={`/tags/${tagName}`}>
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  )
}
