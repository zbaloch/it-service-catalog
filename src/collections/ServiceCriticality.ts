import type { CollectionConfig } from 'payload'

export const ServiceCriticality: CollectionConfig = {
  slug: 'service-criticality',
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
      name: 'slas',
      label: 'SLAs',
      type: 'relationship',
      relationTo: 'service-slas',
    },
  ],
}
