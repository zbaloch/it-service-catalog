import type { CollectionConfig } from 'payload'

export const Databases: CollectionConfig = {
  slug: 'databases',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'server',
      label: 'Server',
      type: 'relationship',
      relationTo: 'servers',
    },
  ],
}
