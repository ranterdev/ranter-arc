import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import HelloResolver from '@graphql/resolvers/HelloResolver'
import { UserResolver } from '@graphql/resolvers/User'

const getSchema = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver, UserResolver]
  })
  return schema
}

export default getSchema
