'use client';
import React, { useEffect } from 'react'

export default function Hero() {

    const onScroll = () => {
        const scroll = window.scrollY
        document.documentElement?.style.setProperty('--scroll', `${scroll * 0.5}px`)
    }

    useEffect(() => {
        document.documentElement?.style.setProperty('--scroll', `0px`)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <section className={`text-textLight h-screen overflow-hidden bg-hero flex justify-center items-center flex-col bg-cover lg:bg-[length:150%] bg-[40%_var(--scroll)]`}>
            <h1 className='text-6xl lg:text-9xl font-black text-textLight'>L'Atelier 3.0</h1>
            <p className='text-2xl lg:text-3xl'>Agence de communication digitale</p>
        </section>
    )
}
