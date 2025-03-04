import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
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
      name: 'framework',
      label: 'Framework',
      type: 'relationship',
      relationTo: 'frameworks',
    },
    {
      name: 'server',
      label: 'Server',
      type: 'relationship',
      relationTo: 'servers',
    },
    {
      name: 'databases',
      label: 'Databases',
      type: 'relationship',
      relationTo: 'databases',
      hasMany: true,
    },
    {
      name: 'versionControl',
      label: 'Version Control',
      type: 'text',
    },
    {
      name: 'cardholderData',
      label: 'Cardholder Data',
      type: 'checkbox',
    },
    {
      name: 'lifecycle-status',
      label: 'Lifecycle Status',
      type: 'relationship',
      relationTo: 'lifecycle-status',
    },
  ],
}
