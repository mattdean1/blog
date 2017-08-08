import React from 'react'

import styles from './style.css'

export default function HeroImage(props) {
  const { aspectRatio, base64, src, srcSet, sizes } = props.imgData
  const padding = `${1 / aspectRatio * 100}%`
  return (
    <figure className="responsive-image-wrapper">
      <div
        className="responsive-image-loader"
        style={{
          paddingBottom: padding,
          backgroundImage: `url('${base64}')`,
        }}
      >
        <img
          className="responsive-image-image"
          alt="altTag"
          title="title"
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          onLoad="imageLoaded(this)"
        />
      </div>
    </figure>
  )
}
