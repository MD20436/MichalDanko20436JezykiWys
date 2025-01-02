import MainHeader from '../components/main-header';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}
