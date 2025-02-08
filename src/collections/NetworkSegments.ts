import type { CollectionConfig } from 'payload'

export const NetworkSegments: CollectionConfig = {
  slug: 'network-segments',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      admin: {
        description: 'Example: 10.180.x.x (CDE)',
      },
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
  ],
}
