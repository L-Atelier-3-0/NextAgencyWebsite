import { getPost } from "@/sanity.query"
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import {notFound} from 'next/navigation';

export default async function Article({params}: {params: {slug: string}}){

    const post = await getPost(params.slug);

    if(!post) return notFound();
    
    return <div>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        {post.imageUrl && <Image src={post.imageUrl} width={300} height={300} alt={post.title}/>}
        <PortableText value={post.body}/>
    </div>
}