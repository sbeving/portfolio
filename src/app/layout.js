import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saleh Eddine Touil | Cybersecurity Specialist & CTF Champion',
  description: 'Elite cybersecurity professional specializing in penetration testing, secure development, and CTF competitions. 1st Place DarkNets CTF 3.0 • Top 8 Securinets Finals • Full-Stack Developer',
  keywords: ['cybersecurity', 'penetration testing', 'CTF', 'web security', 'full-stack developer', 'ethical hacking', 'security researcher', 'Tunisia'],
  authors: [{ name: 'Saleh Eddine Touil' }],
  creator: 'Saleh Eddine Touil',
  publisher: 'Saleh Eddine Touil',
  metadataBase: new URL('https://www.saleheddinetouil.tech'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Saleh Eddine Touil | Cybersecurity Specialist & CTF Champion',
    description: 'Elite cybersecurity professional specializing in penetration testing, secure development, and CTF competitions. 1st Place DarkNets CTF 3.0 • Top 8 Securinets Finals',
    url: 'https://www.saleheddinetouil.tech',
    siteName: 'Saleh Eddine Touil Portfolio',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Saleh Eddine Touil - Cybersecurity Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saleh Eddine Touil | Cybersecurity Specialist & CTF Champion',
    description: 'Elite cybersecurity professional • CTF Champion • Penetration Tester • Full-Stack Developer',
    images: ['/images/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens when you set them up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
