import { getPost } from "@/sanity.query"
import Image from 'next/image';
import { PortableText, PortableTextComponent } from '@portabletext/react';
import { notFound } from 'next/navigation';
import DefaultLayout from "@/app/layouts/DefaultLayout";
import { Post } from "@/schemas/post";
import BlogProgressBar from "@/app/components/BlogProgressBar";

export default async function Article({ params }: { params: { slug: string } }) {

    const post: Post = await getPost(params.slug);

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
    </DefaultLayout>
}