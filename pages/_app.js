import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from '../components/layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#000001',
      light: '#1a1a1a',
    },
    secondary: {
      main: '#6101d0',
      dark: '#5900db',
      light: '#5600e0',
    },
    accent: {
      main: '#e57b0c',
      dark: '#e5820a',
      light: '#e3780b',
    },
    error: {
      main: '#810aaa',
    },
    warning: {
      main: '#e57b0c',
    },
    success: {
      main: '#6101d0',
    },
  },
  typography: {
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;