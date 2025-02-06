import type { CollectionConfig } from 'payload'

export const ServerTypes: CollectionConfig = {
  slug: 'server-types',
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
  ],
}
