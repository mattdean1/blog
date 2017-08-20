export default {
  wrapper: {
    margin: '0 auto',
    display: 'block',
  },
  backgroundImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    display: 'inline-block',
    overflow: 'hidden !important',
    height: 0,
    position: 'relative',
  },
  image: {
    position: 'absolute',
  },
  imageLoading: {
    opacity: 0,
  },
  imageLoaded: {
    opacity: 1,
    transition: 'opacity 500ms',
    transform: 'translate3d(0, 0, 0)',
  },
}
