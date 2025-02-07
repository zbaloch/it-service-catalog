import type { CollectionConfig } from 'payload'

export const ServiceAvailability: CollectionConfig = {
  slug: 'service-availability',
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
