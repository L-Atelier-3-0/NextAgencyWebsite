import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer />
    </>
  )
}
