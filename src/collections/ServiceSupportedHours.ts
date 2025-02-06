import type { CollectionConfig } from 'payload'

export const ServiceSupportedHours: CollectionConfig = {
  slug: 'service-supported-hours',
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
