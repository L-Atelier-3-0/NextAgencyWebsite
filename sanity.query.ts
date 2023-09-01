import { groq } from "next-sanity";
import client from "@/sanity.client";
import { Post } from "./schemas/post";
import { cache } from "react";

export const revalidate = 60 * 60 * 1; // 1 hour

export const getPosts = cache(async () => {
  return await client.fetch(
    groq`*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    tags,
    abstract,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "bodyLengths": body[]{
      children[]{
        'length': length(text)
      }
    },
  }`
  );
});

export const getPost = cache(
  async (slug: string): Promise<{ post?: Post; relatedPosts?: Post[] }> => {
    return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
      "post": {
        _id,
        title,
        body,
        "slug": slug.current,
        tags,
        "bannerUrl": bannerImage.asset->url,
      },
      "relatedPosts": *[_type == "post" && _id != ^._id && count(tags[][@ in ^.tags]) > 0] | order(count(tags[][@ in ^.tags]) desc) [0...3] {
        title,
        abstract,
        "imageUrl": mainImage.asset->url,
        "slug": slug.current,
        tags
      }
    }`,
      {
        slug,
      }
    );
  }
);
