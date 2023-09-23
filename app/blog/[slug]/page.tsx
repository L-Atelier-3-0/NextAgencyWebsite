import { getPost } from "@/sanity.query";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import BlogProgressBar from "@/app/components/BlogProgressBar";
import RelatedPosts from "@/app/components/RelatedPosts";

const components = {
  block: {
    normal: (props: any) => <p className="">{props.children}</p>,
    h2: (props: any) => (
      <h2 className="text-3xl font-bold my-2">{props.children}</h2>
    ),
  },
  types: {
    image: (props: any) => (
      <div className="max-h-[500px] overflow-hidden">
        <Image
          src={props.value.asset.url}
          alt={props.value.alt}
          width={props.value.asset.metadata.dimensions.width}
          height={props.value.asset.metadata.dimensions.height}
          className="rounded-lg object-contain h-full"
        />
      </div>
    ),
  },
  marks: {},
  listItem: (props: any) => (
    <li className="ml-6 list-disc">{props.children}</li>
  ),
};

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { post, relatedPosts } = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <DefaultLayout className="pt-5">
      <BlogProgressBar />
      <div className="flex flex-col gap-3 blog-article px-4 max-w-5xl m-auto py-16">
        <h1 className="text-6xl lg:text-7xl font-black">{post.title}</h1>
        <PortableText components={components} value={post.body} />
      </div>
      <RelatedPosts posts={relatedPosts} />
    </DefaultLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { post, relatedPosts } = await getPost(params.slug);

  return {
    title: `${post?.title} | L'Atelier 3.0`,
  };
}
