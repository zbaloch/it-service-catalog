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
      name: 'service-criticality',
      label: 'Service Criticality',
      type: 'relationship',
      relationTo: 'service-criticality',
    },
    {
      name: 'service-slas',
      label: 'Service SLAs',
      type: 'relationship',
      relationTo: 'service-slas',
    },
    {
      name: 'service-sla',
      label: 'Service SLA',
      type: 'relationship',
      relationTo: 'service-slas',
    },
    {
      name: 'service-availability',
      label: 'Service Availability',
      type: 'relationship',
      relationTo: 'service-availability',
    },
    {
      name: 'applications',
      label: 'Applications',
      type: 'relationship',
      relationTo: 'applications',
    },
    {
      name: 'users',
      label: 'Users',
      type: 'relationship',
      relationTo: 'customer-types',
    },
    {
      name: 'business-team',
      label: 'Business Owner',
      type: 'relationship',
      relationTo: 'business-teams',
    },
    {
      name: 'technology-team',
      label: 'Technology Team',
      type: 'relationship',
      relationTo: 'technology-teams',
    },
    {
      name: 'vendor',
      label: 'Vendor',
      type: 'relationship',
      relationTo: 'vendors',
    },
    {
      name: 'lifecycle-status',
      label: 'Lifecycle Status',
      type: 'relationship',
      relationTo: 'lifecycle-status',
    },
  ],
}
