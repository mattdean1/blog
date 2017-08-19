import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.headerColor = 'black'
sutroTheme.overrideThemeStyles = ({ rhythm }) => ({
  a: {
    color: '#2196F3',
  },
  'ul,ol': {
    marginLeft: rhythm(1),
  },
})

const typographyConfig = new Typography(sutroTheme)

export default typographyConfig
