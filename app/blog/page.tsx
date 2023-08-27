import React from 'react'
import Default from '../layouts/DefaultLayout'
import { getPosts } from '@/sanity.query'
import { Post } from '@/schemas/post';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

export default async function page() {

    const posts: Post[] = await getPosts();

    return (
        <Default>
            <div className='h-96 bg-hero bg-center bg-cover flex justify-center items-center'>
                <h1 className='text-6xl lg:text-9xl font-black text-textLight'>Blog</h1>
            </div>
            <div className='max-w-5xl py-16 m-auto'>
                <h2>Nos articles</h2>
                <div>
                    {posts.map((post, index) => (
                        <Link href={`blog/${post.slug}`} key={index} className='py-8'>
                            <h3 className='text-3xl font-black'>{post.title}</h3>
                            {post.imageUrl && <Image src={post.imageUrl} alt={post.imageUrl} width={300} height={150} />}
                            <PortableText value={post.body} />
                        </Link>
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