"use client";

import { Post } from "@/schemas/post";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { useEffect, useState } from "react";

type Sort = {
  field: string,
  order: 'ASC'|'DESC'
}

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [searchResults, setSearchResults] = useState<Post[]>(posts);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>({field: 'publishedAt', order: 'DESC'});

  useEffect(() => {
    let newResults = posts;

    if (search.trim().length > 0) {
      newResults = newResults.filter((post) =>
        postContainsSearch(search, post)
      );
    }

    newResults = newResults.filter(post => postContainsAtLeastOneTag(selectedTags, post));

    newResults = newResults.sort((a, b) => sortPosts(a, b, sort));

    setSearchResults(newResults);
  }, [search, selectedTags, sort]);

  useEffect(() => {
    let newTags: string[] = [];

    posts.forEach((post) => post.tags.forEach((tag) => !newTags.includes(tag) ? newTags.push(tag) : null));

    setTags(newTags);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <input
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          type="text"
          name="search"
          id="search"
          className="border-[1px] border-black/50 rounded w-full py-3 px-3"
          placeholder="Rechercher parmi les articles..."
        />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="md:max-w-[200px] w-full">
          <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              value={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  setSelectedTags(selectedTags.filter((t) => t !== tag));
                } else {
                  setSelectedTags([...selectedTags, tag]);
                }
              }}
            />
          ))}
          </div>
          <button onClick={() => setSelectedTags([])} className="rounded-md p-3 mt-2 hover:brightness-125 bg-primary text-textLight w-full">Reset</button>
          <div className="mt-4 flex flex-col gap-1">
            <label htmlFor="sort">Trier par</label>
            <select onChange={(event) => setSort(JSON.parse(event.target.value))} name="sort" id="sort" className="w-full border-[1px] border-bgDark/50 rounded p-2 text-sm">
              <option value={JSON.stringify({field: 'publishedAt', 'order': 'ASC'})}>Date de publication (croissant)</option>
              <option value={JSON.stringify({field: 'publishedAt', 'order': 'DESC'})}>Date de publication (décroissant)</option>
              <option value={JSON.stringify({field: 'bodyLengths', 'order': 'ASC'})}>Longueur (croissant)</option>
              <option value={JSON.stringify({field: 'bodyLengths', 'order': 'DESC'})}>Longueur (décroissant)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((post, index) => (
            <div
              key={index}
              className="border-[1px] rounded-md overflow-hidden border-textDark/50"
            >
              <Link href={`blog/${post.slug}`}>
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.imageUrl}
                    width={300}
                    height={150}
                    className="h-32 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, index) => (
                      <Tag key={index} value={tag} />
                    ))}
                  </div>
                  <h3 className="text-xl font-black">{post.title}</h3>
                  <p>{post.abstract}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const postContainsSearch = (search: string, post: Post) => {
  let cleanSearch = search
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "");
  let cleanTitle = post.title
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "");
  let cleanAbstract = post.abstract
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "");
  let cleanTags = post.tags
    .map((tag) =>
      tag
        .toLowerCase()
        .trim()
        .replace(/[^a-zA-Z0-9 ]/g, "")
    )
    .join(" ");

  return (
    cleanTitle.includes(cleanSearch) ||
    cleanAbstract.includes(cleanSearch) ||
    cleanTags.includes(cleanSearch)
  );
};

const postContainsAtLeastOneTag = (tags: string[], post: Post) => {
  if(tags.length === 0) return true;

  let tagFound: boolean = false;

  tags.forEach(tag => {
    if(post.tags.includes(tag)) tagFound = true;
  })

  return tagFound;
}

const sortPosts = (a: Post, b: Post, sort: Sort) => {
  let aValue = JSON.parse(JSON.stringify(a))[sort.field];
  let bValue = JSON.parse(JSON.stringify(b))[sort.field];

  if(sort.field === 'publishedAt'){
    if(sort.order === 'ASC'){
      return (new Date(aValue) > new Date(bValue)) ? 1 : -1;
    }
    return (new Date(aValue) > new Date(bValue)) ? -1 : 1;
  }

  if(sort.field === 'bodyLengths'){
    aValue = !aValue ? 0 : aValue.map((block: any) => block.children[0].length).reduce((n1: number, n2: number) => n1 + n2);
    bValue = !bValue ? 0 : bValue.map((block: any) => block.children[0].length).reduce((n1: number, n2: number) => n1 + n2);
    
    if(sort.order === 'ASC'){
      return aValue - bValue;
    }
    return bValue - aValue;
  }
  
  return !(sort.order === 'ASC') ?  aValue - bValue : bValue - aValue;
} 