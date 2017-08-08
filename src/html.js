import React from 'react'
import PropTypes from 'prop-types'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.headComponents}
          <script type="text/javascript">
              {function imageLoaded(img){
                img.classList.add('responsive-image-image-loaded');
                img.classList.remove('responsive-image-image-loading');
              };}
          </script>
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script type="text/javascript">
            {//<![CDATA[
              // get all 'image-loader' containers
              function imageLoader() {
                var containers = document.getElementsByClassName('responsive-image-image-loader');
                var containerList = Array.prototype.slice.call(containers);
                containerList.forEach(getImage);
              }

              // get all images from within 'image-loader' containers
              function getImage(element) {
                var images = element.getElementsByTagName('img');
                var imageList = Array.prototype.slice.call(images);
                imageList.forEach(addImageLoadingClass);
              }

              // add 'image-loading' class
              function addImageLoadingClass(element) {
                element.classList.add('responsive-image-image-loading');
              }

              // launch the image loader
              (function() {
                imageLoader();
              })();
            //]]>}
          </script>
        </body>
      </html>
    )
  }
}
