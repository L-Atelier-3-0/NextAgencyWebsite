import {defineField, defineType, PortableTextBlock, Image} from 'sanity'

export type Post = {
  title: string,
  slug: string,
  tags: string[],
  imageUrl?: string,
  bannerUrl?: string,
  body: PortableTextBlock,
  abstract: string,
  publishedAt: string
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required().warning('Missing body text'),
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      validation: Rule => Rule.required().warning('Missing abstract text').max(150).warning('Abstract should be max 150 characters'),
    }),
  ],
  initialValue: {
    publishedAt: Date()
  },
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    }
  }
})
