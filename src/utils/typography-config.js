import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.headerColor = 'black'
sutroTheme.overrideThemeStyles = () => ({
  a: {
    color: '#2196F3',
  },
})

const typographyConfig = new Typography(sutroTheme)

export default typographyConfig
