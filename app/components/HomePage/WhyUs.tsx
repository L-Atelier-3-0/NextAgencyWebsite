import React from 'react'
import Image from 'next/image';
import { cards } from '@/app/constant_data/why-us';

export default async function WhyUs() {
    return (
        <section className='px-4 flex flex-col items-center py-16 bg-primary'>
            <h2 className='text-6xl lg:text-9xl font-black text-textLight'>Pourquoi nous ?</h2>
            <div className='flex gap-2 flex-wrap w-full justify-center max-w-7xl pt-16 pb-2'>
                {cards?.map((card: WhyUsCard, i: number) => (
                    <div className='w-full sm:max-w-[16rem] border-[1px] border-bgDark rounded-md overflow-hidden bg-bgLight'>
                        <div className='relative'>
                            <Image className='h-36 object-cover w-full' src={card.image} width={400} height={200} alt={card.title} />
                            <h3 className='w-4/5 absolute bottom-1 left-2 text-textDark text-4xl translate-y-1/2 font-bold overflow-hidden overflow-ellipsis'>{card.title}</h3>
                        </div>
                        <div className='p-2 pt-4'>
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
