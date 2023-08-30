import React from 'react'
import Default from '../layouts/DefaultLayout'
import { getPosts } from '@/sanity.query'
import { Post } from '@/schemas/post';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../components/Tag';

export default async function page() {

    const posts: Post[] = await getPosts();

    return (
        <Default>
            <div className='h-96 bg-hero bg-center bg-cover flex justify-center items-center'>
                <h1 className='text-6xl lg:text-9xl font-black text-textLight'>Blog</h1>
            </div>
            <div className='max-w-5xl py-16 px-4 m-auto'>
                <h2 className='text-xl mb-8'>Tous nos articles</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {posts.map((post, index) => (
                        <div className='border-[1px] rounded-md overflow-hidden border-textDark/50'>
                            <Link href={`blog/${post.slug}`} key={index}>
                                {post.imageUrl && <Image src={post.imageUrl} alt={post.imageUrl} width={300} height={150} className='h-40 w-full object-cover'/>}
                                <div className='p-4'>
                                    <div className='flex flex-wrap gap-2 mb-2'>
                                        {post.tags.map((tag, index) => (
                                            <Tag key={index} value={tag} />
                                        ))}
                                    </div>
                                    <h3 className='text-3xl font-black'>{post.title}</h3>
                                    <p>{post.abstract}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Default>
    )
}

export async function generateMetadata() {
    return {
        title: `Blog | L'Atelier 3.0`,
        description: `Le blog de l'Atelier 3.0, agence digitale spécialisée dans la création de sites web et le référencement.`,
    }
}