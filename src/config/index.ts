export * from './yaml'

export const APP_PORT = parseInt(process.env.APP_PORT || '4000')

export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'
