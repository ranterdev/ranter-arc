import express from 'express'
import baseLogger, { httpLogger } from '@services/logger'
import helmet from 'helmet'
import PinoHttp from 'pino-http'

import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core'
import { APP_PORT, apolloConfig, isProd } from '@config'

import getSchema from '@graphql/index'

const startServer = async () => {
  const app = express()
  const httpServer = createServer(app)
  app.disable('x-powered-by')

  const apolloPlugins = [
    /* Stops server but completes ongoing requests */
    ApolloServerPluginDrainHttpServer({
      httpServer
    }),

    /* Enable or disable GraphQL Playground */
    apolloConfig.playground
      ? ApolloServerPluginLandingPageGraphQLPlayground({
          settings: { 'schema.polling.enable': false }
        })
      : ApolloServerPluginLandingPageDisabled()
  ]

  const apolloServer = new ApolloServer({
    schema: await getSchema(),
    introspection: apolloConfig.introspection,
    plugins: apolloPlugins
  })

  if (isProd) {
    app.use(
      helmet({
        contentSecurityPolicy: apolloConfig.playground ? false : undefined
      })
    )
  }

  app.use(
    PinoHttp({
      autoLogging: true
    })
  )
  app.get('/healthz', (_, r) => r.sendStatus(200))
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })
  httpServer.listen({ port: APP_PORT }, () =>
    baseLogger.info(`🚀 Server listening on port http://localhost:${APP_PORT}/graphql`)
  )

  httpServer.on('error', (err) => {
    httpLogger.error(err)
    throw err
  })
}

if (require.main === module) {
  startServer()
}
