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
  const services = await payload.find({ collection: 'services', depth: 4 })

  console.log('services', services)
  console.log('databases', services.docs[0].applications[0].databases)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">IT Services</h1>
            <p className="mt-2 text-sm text-gray-700">List of all IT services</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            {/* <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button> */}
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Applications
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Databases
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Users
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Ownership
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.docs.map((service) => (
                    <tr key={service.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                        <span className="font-medium block">{service.name}</span>
                        <span className="block">{service.category?.name}</span>
                        <span className="block">{service.serviceCriticality?.name}</span>
                        <span className="block">{service.networkSegment?.name}</span>
                        <span className="block">{service.vendor?.name}</span>
                        <span className="block">{service.cardholderData ? 'CHD' : 'No CHD'}</span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {service.applications?.map((application) => (
                          <>
                            <div className="mb-2">
                              <span className="block font-medium">{application.name}</span>
                              <span className="block">{application.server.name}</span>
                              <span className="block">{application.server.ipAddress}</span>
                              <span className="block">
                                {application.server.networkSegment?.name}
                              </span>
                              <span className="block">{application.versionControl}</span>

                              <span className="block">
                                {application.server.cardholderData ? 'CHD' : 'No CHD'}
                              </span>
                              <span className="block">
                                {application.server.lifecycleStatus?.name}
                              </span>
                            </div>
                          </>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {service.applications?.map((application) => (
                          <>
                            {application.databases?.map((database) => (
                              <>
                                <div className="mb-2">
                                  <span className="block font-medium">{database.name}</span>
                                  <span className="block">{database.server.name}</span>
                                  <span className="block">{database.server.ipAddress}</span>
                                  <span className="block">
                                    {database.server.networkSegment?.name}
                                  </span>
                                  <span className="block">{database.versionControl}</span>

                                  <span className="block">
                                    {database.server.cardholderData ? 'CHD' : 'No CHD'}
                                  </span>
                                  <span className="block">
                                    {database.server.lifecycleStatus?.name}
                                  </span>
                                </div>
                              </>
                            ))}
                          </>
                        ))}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {service.users?.map((user) => (
                          <span key={user.name} className="block">
                            {user.name}
                          </span>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {service.businessTeams?.map((team) => (
                          <span key={team.name} className="block">
                            {team.name}
                          </span>
                        ))}
                        {service.technologyTeams?.map((team) => (
                          <span key={team.name} className="block">
                            {team.name}
                          </span>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {service.lifecycleStatus?.name}
                      </td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {service.id}</span>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
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
      </div> */}
    </>
  )
}
