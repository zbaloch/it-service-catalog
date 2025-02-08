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
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'uptimeTarget',
      label: 'Uptime Target',
      type: 'text',
      required: true,
    },
    {
      name: 'rtoTarget',
      label: 'RTO Target (Max Downtime)',
      type: 'text',
      required: true,
    },
    {
      name: 'rpoTarget',
      label: 'RPO Target (Max Data Loss)',
      type: 'text',
      required: true,
    },
    {
      name: 'responseTimeTarget',
      label: 'Response Time Target',
      type: 'text',
      required: true,
    },
    {
      name: 'resolutionTimeTarget',
      label: 'Resolution Time Target',
      type: 'text',
      required: true,
    },
  ],
}
