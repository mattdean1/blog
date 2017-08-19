import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.headerColor = 'black'
sutroTheme.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['400', '700'],
  },
  {
    name: 'Merriweather',
    styles: ['300', '300i', '700', '700i'],
  },
]
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
