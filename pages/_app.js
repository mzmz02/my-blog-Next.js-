import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// to load global CSS file
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}