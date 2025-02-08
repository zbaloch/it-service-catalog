import type { CollectionConfig } from 'payload'

export const Servers: CollectionConfig = {
  slug: 'servers',
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
      name: 'type',
      label: 'Type',
      type: 'relationship',
      relationTo: 'server-types',
    },
    {
      name: 'ipAddress',
      label: 'IP Address',
      type: 'text',
    },
    {
      name: 'networkSegment',
      label: 'Network Segment',
      type: 'relationship',
      relationTo: 'network-segments',
      admin: {
        description: 'The network segment this server is a part of',
      },
    },
    {
      name: 'lifecycle-status',
      label: 'Lifecycle Status',
      type: 'relationship',
      relationTo: 'lifecycle-status',
    },
  ],
}
