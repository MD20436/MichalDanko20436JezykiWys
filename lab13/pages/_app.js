'use client';
import MainHeader from '../components/main-header';
import '../styles/globals.css';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const basePath = useRouter().basePath; // Użyj basePath z routera Next.js
  return (
    <>
      <MainHeader basePath={basePath} />
      <Component {...pageProps} basePath={basePath} />
    </>
  );
}
