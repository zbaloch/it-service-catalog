import type { CollectionConfig } from 'payload'

export const BusinessTeams: CollectionConfig = {
  slug: 'business-teams',
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
      name: 'head',
      label: 'Unit Head',
      type: 'text',
    },
  ],
}
