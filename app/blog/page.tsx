import React from 'react'
import Default from '../layouts/DefaultLayout'
import { getPosts } from '@/sanity.query'
import { Post } from '@/schemas/post';
import BlogSearch from '../components/BlogSearch';

export default async function page() {

    const posts: Post[] = await getPosts();

    return (
        <Default>
            <div className='h-96 bg-hero bg-center bg-cover flex justify-center items-center'>
                <h1 className='text-6xl lg:text-9xl font-black text-textLight'>Blog</h1>
            </div>
            <div className='max-w-5xl py-16 px-4 m-auto'>
                <h2 className='text-xl mb-8'>Tous nos articles</h2>
                <BlogSearch posts={posts}/>
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