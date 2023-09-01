import { Post } from "@/schemas/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

export default function RelatedPosts({ posts }: { posts?: Post[] }) {
  return (
    posts?.length && (
      <div className="px-4 max-w-5xl m-auto py-8">
        <h2 className="text-xl mb-6">Articles similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((relatedPost, index) => (
            <div
              key={index}
              className="border-[1px] rounded-md overflow-hidden border-textDark/50"
            >
              <Link
                href={`/blog/${relatedPost.slug}`}
              >
                {relatedPost.imageUrl && (
                  <Image
                    src={relatedPost.imageUrl}
                    alt={relatedPost.imageUrl}
                    width={300}
                    height={150}
                    className="h-32 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {relatedPost.tags.map((tag, index) => (
                      <Tag key={index} value={tag} />
                    ))}
                  </div>
                  <h3 className="text-xl font-black">{relatedPost.title}</h3>
                  <p>{relatedPost.abstract}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
