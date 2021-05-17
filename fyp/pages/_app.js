import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/scss/styles.scss'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { AppWrapper } from '../context/state.js';
import CookieConsent from "react-cookie-consent";


// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
//https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t

export default function MyApp({ Component, pageProps }) {
  return <div><Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
    <link href="http://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet" />
  </Head>
    <AppWrapper>
      <NavBar />
      <Component {...pageProps} />
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
      <Footer />
    </AppWrapper>
  </div>
}
