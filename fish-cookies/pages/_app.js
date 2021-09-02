import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Head from '../Components/Head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
