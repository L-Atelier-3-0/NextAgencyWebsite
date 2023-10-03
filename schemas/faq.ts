import {defineField, defineType} from 'sanity'

export type FAQ = {
  question: string,
  answer: string
}

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
    }),
  ],
})
