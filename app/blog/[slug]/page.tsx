import { getPost } from "@/sanity.query"
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import DefaultLayout from "@/app/layouts/DefaultLayout";
import BlogProgressBar from "@/app/components/BlogProgressBar";
import RelatedPosts from "@/app/components/RelatedPosts";

export default async function Article({ params }: {params: {slug: string}}) {
    const {post, relatedPosts} = await getPost(params.slug);
    if (!post) return notFound();
    
    return <DefaultLayout>
        <div className={`h-96 flex justify-center items-center relative overflow-hidden`}>
            <Image src={post.imageUrl ?? '/default-banner.jpg'} width={1920} height={300} alt={post.title} className="absolute inset-0 w-full h-full object-cover -z-[1] blur-lg scale-110"/>
            <h1 className='text-6xl lg:text-9xl font-black text-textLight'>{post.title}</h1>
        </div>
        <BlogProgressBar/>
        <div className="blog-article px-4 max-w-5xl m-auto py-16">
            <PortableText value={post.body}/>
        </div>
        <RelatedPosts posts={relatedPosts}/>
    </DefaultLayout>
}

export async function generateMetadata({params}: {params: {slug: string}}) {
    const {post, relatedPosts} = await getPost(params.slug);

    return {
        title: `${post?.title} | L'Atelier 3.0`,
    }
}