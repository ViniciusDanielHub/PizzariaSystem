import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { AuthProvider } from 'context/auth/authContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate | React Avançado</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Projeto construído com base no curso de React Avançado do Willian Justen"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
    </AuthProvider>
  )
}
