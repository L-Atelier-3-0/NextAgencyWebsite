import { groq } from "next-sanity";
import client from "@/sanity.client";

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      tags,
      abstract,
      "imageUrl": mainImage.asset->url
    }`
  );
}

export async function getPost(slug: string) {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug]{
        _id,
        title,
        "slug": slug.current,
        tags,
        body,
        "bannerUrl": bannerImage.asset->url
      }`,
    {
      slug,
    }
  );

  return post[0];
}

export async function getServices() {
  return await client.fetch(
    groq`*[_type == "service"]{
      _id,
      title,
      "image": image.asset->url,
      body,
    }`
  );
}