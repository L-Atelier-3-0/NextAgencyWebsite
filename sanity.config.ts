import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = {
  name: 'default',
  title: 'L\'Atelier 3.0',

  projectId: 'rsovxvnr',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio'
}; 

export default defineConfig(config);