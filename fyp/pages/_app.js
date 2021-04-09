import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/scss/styles.scss'
import NavBar from '../components/NavBar';

import { AppWrapper } from '../context/state.js';


export default function MyApp({ Component, pageProps }) {
  return <AppWrapper><NavBar /><Component {...pageProps} /></AppWrapper>
}
