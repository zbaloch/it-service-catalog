/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    services: Service;
    applications: Application;
    databases: Database;
    'service-categories': ServiceCategory;
    'business-teams': BusinessTeam;
    'customer-types': CustomerType;
    'lifecycle-status': LifecycleStatus;
    'service-criticality': ServiceCriticality;
    'technology-teams': TechnologyTeam;
    vendors: Vendor;
    servers: Server;
    'server-types': ServerType;
    'network-segments': NetworkSegment;
    software: Software;
    frameworks: Framework;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    applications: ApplicationsSelect<false> | ApplicationsSelect<true>;
    databases: DatabasesSelect<false> | DatabasesSelect<true>;
    'service-categories': ServiceCategoriesSelect<false> | ServiceCategoriesSelect<true>;
    'business-teams': BusinessTeamsSelect<false> | BusinessTeamsSelect<true>;
    'customer-types': CustomerTypesSelect<false> | CustomerTypesSelect<true>;
    'lifecycle-status': LifecycleStatusSelect<false> | LifecycleStatusSelect<true>;
    'service-criticality': ServiceCriticalitySelect<false> | ServiceCriticalitySelect<true>;
    'technology-teams': TechnologyTeamsSelect<false> | TechnologyTeamsSelect<true>;
    vendors: VendorsSelect<false> | VendorsSelect<true>;
    servers: ServersSelect<false> | ServersSelect<true>;
    'server-types': ServerTypesSelect<false> | ServerTypesSelect<true>;
    'network-segments': NetworkSegmentsSelect<false> | NetworkSegmentsSelect<true>;
    software: SoftwareSelect<false> | SoftwareSelect<true>;
    frameworks: FrameworksSelect<false> | FrameworksSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number;
  name: string;
  description?: string | null;
  category?: (number | null) | ServiceCategory;
  serviceCriticality?: (number | null) | ServiceCriticality;
  applications?: (number | Application)[] | null;
  users?: (number | CustomerType)[] | null;
  businessTeams?: (number | BusinessTeam)[] | null;
  technologyTeams?: (number | TechnologyTeam)[] | null;
  vendor?: (number | null) | Vendor;
  cardholderData?: boolean | null;
  lifecycleStatus?: (number | null) | LifecycleStatus;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories".
 */
export interface ServiceCategory {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-criticality".
 */
export interface ServiceCriticality {
  id: number;
  name: string;
  description?: string | null;
  uptimeTarget: string;
  rtoTarget: string;
  rpoTarget: string;
  responseTimeTarget: string;
  resolutionTimeTarget: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "applications".
 */
export interface Application {
  id: number;
  name: string;
  description?: string | null;
  framework?: (number | null) | Framework;
  server?: (number | null) | Server;
  databases?: (number | Database)[] | null;
  versionControl?: string | null;
  cardholderData?: boolean | null;
  'lifecycle-status'?: (number | null) | LifecycleStatus;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "frameworks".
 */
export interface Framework {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "servers".
 */
export interface Server {
  id: number;
  name: string;
  type?: (number | null) | ServerType;
  ipAddress?: string | null;
  /**
   * The network segment this server is a part of
   */
  networkSegment?: (number | null) | NetworkSegment;
  installedSoftware?: (number | Software)[] | null;
  lifecycleStatus?: (number | null) | LifecycleStatus;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "server-types".
 */
export interface ServerType {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "network-segments".
 */
export interface NetworkSegment {
  id: number;
  /**
   * Example: 10.180.x.x (CDE)
   */
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "software".
 */
export interface Software {
  id: number;
  name: string;
  description?: string | null;
  vendor?: (number | null) | Vendor;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "vendors".
 */
export interface Vendor {
  id: number;
  /**
   * Name of the vendor
   */
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lifecycle-status".
 */
export interface LifecycleStatus {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "databases".
 */
export interface Database {
  id: number;
  name: string;
  description?: string | null;
  server?: (number | null) | Server;
  versionControl?: string | null;
  cardholderData?: boolean | null;
  'lifecycle-status'?: (number | null) | LifecycleStatus;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customer-types".
 */
export interface CustomerType {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "business-teams".
 */
export interface BusinessTeam {
  id: number;
  name: string;
  description?: string | null;
  head?: string | null;
  headContact?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "technology-teams".
 */
export interface TechnologyTeam {
  id: number;
  name: string;
  description?: string | null;
  head?: string | null;
  headContact?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'services';
        value: number | Service;
      } | null)
    | ({
        relationTo: 'applications';
        value: number | Application;
      } | null)
    | ({
        relationTo: 'databases';
        value: number | Database;
      } | null)
    | ({
        relationTo: 'service-categories';
        value: number | ServiceCategory;
      } | null)
    | ({
        relationTo: 'business-teams';
        value: number | BusinessTeam;
      } | null)
    | ({
        relationTo: 'customer-types';
        value: number | CustomerType;
      } | null)
    | ({
        relationTo: 'lifecycle-status';
        value: number | LifecycleStatus;
      } | null)
    | ({
        relationTo: 'service-criticality';
        value: number | ServiceCriticality;
      } | null)
    | ({
        relationTo: 'technology-teams';
        value: number | TechnologyTeam;
      } | null)
    | ({
        relationTo: 'vendors';
        value: number | Vendor;
      } | null)
    | ({
        relationTo: 'servers';
        value: number | Server;
      } | null)
    | ({
        relationTo: 'server-types';
        value: number | ServerType;
      } | null)
    | ({
        relationTo: 'network-segments';
        value: number | NetworkSegment;
      } | null)
    | ({
        relationTo: 'software';
        value: number | Software;
      } | null)
    | ({
        relationTo: 'frameworks';
        value: number | Framework;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  category?: T;
  serviceCriticality?: T;
  applications?: T;
  users?: T;
  businessTeams?: T;
  technologyTeams?: T;
  vendor?: T;
  cardholderData?: T;
  lifecycleStatus?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "applications_select".
 */
export interface ApplicationsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  framework?: T;
  server?: T;
  databases?: T;
  versionControl?: T;
  cardholderData?: T;
  'lifecycle-status'?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "databases_select".
 */
export interface DatabasesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  server?: T;
  versionControl?: T;
  cardholderData?: T;
  'lifecycle-status'?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories_select".
 */
export interface ServiceCategoriesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "business-teams_select".
 */
export interface BusinessTeamsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  head?: T;
  headContact?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customer-types_select".
 */
export interface CustomerTypesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lifecycle-status_select".
 */
export interface LifecycleStatusSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-criticality_select".
 */
export interface ServiceCriticalitySelect<T extends boolean = true> {
  name?: T;
  description?: T;
  uptimeTarget?: T;
  rtoTarget?: T;
  rpoTarget?: T;
  responseTimeTarget?: T;
  resolutionTimeTarget?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "technology-teams_select".
 */
export interface TechnologyTeamsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  head?: T;
  headContact?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "vendors_select".
 */
export interface VendorsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "servers_select".
 */
export interface ServersSelect<T extends boolean = true> {
  name?: T;
  type?: T;
  ipAddress?: T;
  networkSegment?: T;
  installedSoftware?: T;
  lifecycleStatus?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "server-types_select".
 */
export interface ServerTypesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "network-segments_select".
 */
export interface NetworkSegmentsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "software_select".
 */
export interface SoftwareSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  vendor?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "frameworks_select".
 */
export interface FrameworksSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}