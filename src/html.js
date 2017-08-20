import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/blog/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/blog/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/blog/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/blog/favicons/manifest.json" />
        <link rel="mask-icon" href="/blog/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/blog/favicons/favicon.ico" />
        {props.headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  headComponents: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
  body: PropTypes.string,
  postBodyComponents: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
}
HTML.defaultProps = {
  headComponents: '',
  body: '',
  postBodyComponents: '',
}
