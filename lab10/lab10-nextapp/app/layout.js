import Link from 'next/link';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif' }}>
              <nav style={{
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#333',
                  padding: '10px 0',
              }}>
                  <ul style={{ display: 'flex', listStyleType: 'none', padding: '0', margin: '0', gap: '20px' }}>
                      <li><Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>O mnie</Link></li>
                      <li><Link href="/interests" style={{ color: '#fff', textDecoration: 'none' }}>Zainteresowania</Link></li>
                      <li><Link href="/favorites" style={{ color: '#fff', textDecoration: 'none' }}>Ulubiona gra</Link></li>
                      <li><Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</Link></li>
                  </ul>
              </nav>
              {children}
          </body>
      </html>
  );
}