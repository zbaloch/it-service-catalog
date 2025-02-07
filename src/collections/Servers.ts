import type { CollectionConfig } from 'payload'

export const Servers: CollectionConfig = {
  slug: 'servers',
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
      name: 'type',
      label: 'Type',
      type: 'relationship',
      relationTo: 'server-types',
    },
  ],
}
