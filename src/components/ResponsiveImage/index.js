import React from 'react'
import PropTypes from 'prop-types'

/*
  Import styles as js object rather than e.g. css-modules
  so we can combine them dynamically
*/
import styles from './styles'

export default class ResponsiveImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageLoading: true,
    }

    this.imageLoaded = this.imageLoaded.bind(this)
  }

  imageLoaded() {
    this.setState({
      imageLoading: false,
    })
  }

  render() {
    // Destructure props
    const { aspectRatio, base64, src, srcSet, sizes } = this.props.imgData
    // Calculate style values
    const maxWidth = sizes.split(',')[1].replace(' ', '')
    const padding = `${1 / aspectRatio * 100}%`
    const imageLoadStyles = this.state.imageLoading ? styles.imageLoading : styles.imageLoaded

    return (
      // Use spread operator (...) to merge objects
      <figure style={{ ...styles.wrapper, maxWidth }}>
        <div
          style={{
            ...styles.backgroundImage,
            paddingBottom: padding,
            backgroundImage: `url('${base64}')`,
          }}
        >
          <img
            style={{ ...styles.image, ...imageLoadStyles }}
            alt="altTag"
            title="title"
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            onLoad={this.imageLoaded}
          />
        </div>
      </figure>
    )
  }
}

ResponsiveImage.propTypes = {
  imgData: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
}
