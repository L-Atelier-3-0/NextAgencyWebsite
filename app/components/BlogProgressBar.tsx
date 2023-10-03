"use client";
import React, { useEffect } from 'react'

export default function BlogProgressBar() {

    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        function handleScroll(){
            const scrollable = document.querySelector('.blog-article')!.getBoundingClientRect().height - innerHeight;
            const scrolled = window.scrollY;

            setProgress(scrolled / scrollable * 100);
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='h-[4px] bg-primary sticky top-20' style={{
            width: `${progress}%`
        }}></div>
    )
}
