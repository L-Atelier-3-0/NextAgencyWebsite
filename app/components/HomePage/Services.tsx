import React from 'react'
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import {cards} from '@/app/constant_data/services';

const Services = async () => {

  return (
    <section id='services' className='flex flex-col items-center py-16'>
      <h2 className='text-6xl lg:text-9xl font-black'>Nos services</h2>
      <div className='flex flex-wrap justify-center gap-4 pt-8 px-4 w-full'>
        {cards?.map((service, i: number) => (
          <div key={i} className='w-full max-w-md border-[1px] border-bgDark rounded-md overflow-hidden bg-bgLight'>
            <div className='relative'>
              <Image className='h-48 object-cover w-full' src={service.image} width={400} height={200} alt={service.title} />
              <h3 className='w-full absolute bottom-1 left-0 px-2 text-textLight text-5xl font-bold overflow-hidden overflow-ellipsis'>{service.title}</h3>
            </div>
            <div className='p-2'>
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;