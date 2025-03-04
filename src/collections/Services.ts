import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
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
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'service-categories',
    },
    {
      name: 'serviceCriticality',
      label: 'Service Criticality',
      type: 'relationship',
      relationTo: 'service-criticality',
    },
    {
      name: 'applications',
      label: 'Applications',
      type: 'relationship',
      relationTo: 'applications',
      hasMany: true,
    },
    {
      name: 'users',
      label: 'Users',
      type: 'relationship',
      relationTo: 'customer-types',
      hasMany: true,
    },
    {
      name: 'businessTeams',
      label: 'Business Owners',
      type: 'relationship',
      relationTo: 'business-teams',
      hasMany: true,
    },
    {
      name: 'technologyTeams',
      label: 'Technology Teams',
      type: 'relationship',
      relationTo: 'technology-teams',
      hasMany: true,
    },
    {
      name: 'vendor',
      label: 'Vendor',
      type: 'relationship',
      relationTo: 'vendors',
    },
    {
      name: 'cardholderData',
      label: 'Cardholder Data',
      type: 'checkbox',
    },
    {
      name: 'lifecycleStatus',
      label: 'Lifecycle Status',
      type: 'relationship',
      relationTo: 'lifecycle-status',
    },
  ],
}
