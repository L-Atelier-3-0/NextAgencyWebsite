import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `L'Atelier 3.0`,
  description: 'Agence digitale spécialisée dans la création de sites web et le référencement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='flex flex-col min-h-full'>{children}</body>
    </html>
  )
}
