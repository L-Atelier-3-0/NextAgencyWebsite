import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'

export default function Header() {
  return (
    <div className='py-4 fixed w-full backdrop-blur-lg bg-white/5 h-20 z-50'>
        <nav className='m-auto flex items-center justify-between px-3 max-w-7xl'>
            <Link href={'/'} title='Accueil' className='flex'>
                <Image src={'/logo.png'} alt='Logo' width={50} height={50}/>
            </Link>
            <div className='flex gap-4 items-center'>
                <Link href={'/#services'} title='Services'>
                    Services
                </Link>
                <Link href={'/#services'} title='Services'>
                    A propos
                </Link>
                <Link href={'/blog'} title='Blog'>
                    Blog
                </Link>
                <Link href={'/#services'} title='Services'>
                    Réalisations
                </Link>
                <ButtonPrimary>
                    <Link href={'/#services'} title='Services'>
                        Contact
                    </Link>
                </ButtonPrimary>
            </div>
        </nav>
    </div>
  )
}
