import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4D3B91',
    },
    secondary: {
      main: '#035AA6',
    },

    background: {
      default: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: 'Mark Pro',
    body1: { fontFamily: 'Open Sans' },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Open Sans',
        color: '#ffffff',
        textTransform: 'initial',
        fontWeight: 400,
      },
    },
  },
})

console.log(MuiTheme)

export default MuiTheme
