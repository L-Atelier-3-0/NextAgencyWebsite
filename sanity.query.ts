import { groq } from "next-sanity";
import client from "@/sanity.client";

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      slug,
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
        slug,
        author,
        body,
        "imageUrl": mainImage.asset->url
      }`,
      {
        slug
      }
    );

    return post[0];
  }