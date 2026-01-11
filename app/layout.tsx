import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jalil Halim - Expert en Transformation Digitale & IA',
  description: 'Votre Partenaire pour Accélérer la Croissance par l\'Innovation. Expert en transformation digitale, IA, Cloud Native et Cybersécurité.',
  keywords: ['transformation digitale', 'IA', 'cloud native', 'cybersécurité', 'conseil stratégique'],
  authors: [{ name: 'Jalil Halim' }],
  openGraph: {
    title: 'Jalil Halim - Expert en Transformation Digitale & IA',
    description: 'Votre Partenaire pour Accélérer la Croissance par l\'Innovation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
