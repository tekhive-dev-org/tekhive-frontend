import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066FF',
    },
    secondary: {
      main: '#525866',
    },
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp