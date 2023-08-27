import React from 'react'

export default function ButtonPrimary({children}: {children: React.ReactNode}) {
  return (
    <button className='bg-primary py-2 px-4 rounded-md text-textLight'>
        {children}
    </button>
  )
}
