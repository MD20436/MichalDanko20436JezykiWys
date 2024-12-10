import MainHeader from '../components/main-header';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <MainHeader />
            <Component {...pageProps} />
        </>
    );
}