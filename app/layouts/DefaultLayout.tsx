import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function DefaultLayout({ children, className }: Props) {
  return (
    <>
      <Header />
      <main className={`${className} flex-1 flex flex-col`}>{children}</main>
      <Footer />
    </>
  )
}
