// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Applications } from './collections/Applications'
import { Databases } from './collections/Databases'
import { ServiceCategories } from './collections/ServiceCategories'
import { BusinessTeams } from './collections/BusinessTeams'
import { CustomerTypes } from './collections/CustomerTypes'
import { LifecycleStatus } from './collections/LifecycleStatus'
import { ServiceCriticality } from './collections/ServiceCriticality'
import { TechnologyTeams } from './collections/TechnologyTeams'
import { Vendors } from './collections/Vendors'
import { Servers } from './collections/Servers'
import { ServerTypes } from './collections/ServerTypes'
import { NetworkSegments } from './collections/NetworkSegments'
import { Software } from './collections/Software'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Services,
    Applications,
    Databases,
    ServiceCategories,
    BusinessTeams,
    CustomerTypes,
    LifecycleStatus,
    ServiceCriticality,
    TechnologyTeams,
    Vendors,
    Servers,
    ServerTypes,
    NetworkSegments,
    Software,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
