import type { CollectionConfig } from 'payload'

export const ServiceSLAs: CollectionConfig = {
  slug: 'service-slas',
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
