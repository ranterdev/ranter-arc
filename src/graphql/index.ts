import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import HelloResolver from './resolvers/HelloResolver'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    })
    return schema
}

export default getSchema
