import React from 'react'

export default (
  <div
    style={{
      textAlign: 'right',
      backgroundColor: '#2d303b',
      height: '100%',
      overflow: 'hidden',
      padding: '20px',
    }}
  >
    <h1 style={{ marginBottom: 0, color: 'white' }}> Some Posts </h1>
    <h3 style={{ marginTop: 0, color: 'white' }}> by Matt Dean </h3>
    <ul>
      <li style={{}}>
        <a style={{ color: 'white' }} href="/">
          Blog
        </a>
      </li>
      <li>
        <a style={{ color: 'white' }} href="https://www.linkedin.com/in/deanmatt/">
          About
        </a>
      </li>
      <li>
        <a style={{ color: 'white' }} href="https://github.com/mattdean1">
          Portfolio
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
