import './globals.css'
import Header from '../components/Header';

export const metadata = {
  title: 'Saleh Eddine Touil | Bug Bounty Hunter & CPTS',
  description: 'Full-time bug bounty hunter on Intigriti focused on Web and API security, access control, authentication logic, recon, exploit chaining, and CTF competition.',
  keywords: ['bug bounty', 'intigriti', 'cybersecurity', 'penetration testing', 'CPTS', 'CTF', 'web security', 'API security', 'ethical hacking', 'security researcher', 'Tunisia'],
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
    title: 'Saleh Eddine Touil | Bug Bounty Hunter & CPTS',
    description: 'Full-time bug bounty hunter on Intigriti focused on Web and API security, access control, authentication logic, recon, and exploit chaining.',
    url: 'https://www.saleheddinetouil.tech',
    siteName: 'Saleh Eddine Touil Portfolio',
    images: [
      {
        url: '/images/me.JPG',
        width: 1200,
        height: 630,
        alt: 'Saleh Eddine Touil - Bug Bounty Hunter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saleh Eddine Touil | Bug Bounty Hunter & CPTS',
    description: 'Full-time Intigriti bug bounty hunter • CPTS • Web and API security • CTF player',
    images: ['/images/me.JPG'],
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
