const { responsiveSizes } = require('gatsby-plugin-sharp')
const path = require('path')

export default async function generateResponsiveImage(relativeImagePath, altTag) {
  const options = {
    backgroundColor: 'white',
  }
  const imagePath = path.resolve(relativeImagePath)
  console.log(`absolute path: ${imagePath}`)
  const responsiveSizesResult = await responsiveSizes({
    file: imagePath,
    args: options,
  })

  // console.log("responsiveSizesResult", responsiveSizesResult)
  // Calculate the paddingBottom %
  const ratio = `${1 / (responsiveSizesResult.aspectRatio * 100)}%`

  // const originalImg = responsiveSizesResult.originalImage
  const fallbackSrc = responsiveSizesResult.src
  const srcSet = responsiveSizesResult.srcSet

  // Construct new image node w/ aspect ratio placeholder
  const responsiveImage = `
    <span
     class="gatsby-resp-image-wrapper"
     style="position: relative; z-index: -1; display: block;"
    >
     <span
       class="gatsby-resp-image-background-image"
       style="padding-bottom: ${ratio};position: relative; width: 100%; bottom: 0; left: 0; background-image: url('${responsiveSizesResult.base64}'); background-size: cover; display: block;"
     >
       <img
         class="gatsby-resp-image-image"
         style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px ${options.backgroundColor};"
         alt="${altTag}"
         title="${altTag}"
         src="${fallbackSrc}"
         srcset="${srcSet}"
         sizes="${responsiveSizesResult.sizes}"
       />
     </span>
    </span>
  `

  return responsiveImage
}
