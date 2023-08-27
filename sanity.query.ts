import { groq } from "next-sanity";
import client from "@/sanity.client";

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      author,
      body,
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
        author,
        body,
        "imageUrl": mainImage.asset->url
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