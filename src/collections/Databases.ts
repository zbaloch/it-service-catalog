import type { CollectionConfig } from 'payload'

export const Databases: CollectionConfig = {
  slug: 'databases',
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
      name: 'server',
      label: 'Server',
      type: 'relationship',
      relationTo: 'servers',
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
