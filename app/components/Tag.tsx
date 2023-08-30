import React from 'react'

export default function Tag({value}: {value: string}) {
  return (
    <div className='bg-bgDark text-xs rounded-lg w-fit text-textLight px-4 py-2 hover:brightness-125'>{value}</div>
  )
}
