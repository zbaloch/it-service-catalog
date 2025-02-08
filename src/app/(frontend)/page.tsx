import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const services = await payload.find({ collection: 'services' })

  console.log('services', services)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div>
        <div>
          {services.docs.map((service: any) => (
            <div key={service.id}>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
        {!user && <p>Welcome to your new project.</p>}
        {user && <p>Welcome back, {user.email}</p>}
        <p>
          <a href={payloadConfig.routes.admin}>Admin panel</a>
        </p>
        <p>
          <a href="https://payloadcms.com/docs">Documentation</a>
        </p>
      </div>
    </>
  )
}
