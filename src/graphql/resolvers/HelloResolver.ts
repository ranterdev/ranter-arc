import { Query, Resolver } from 'type-graphql'

import HelloEntity from '@graphql/types/HelloTypes'

@Resolver()
class HelloResolver {
  @Query(() => HelloEntity)
  async hello(): Promise<HelloEntity> {
    return {
      test: 'Ola! Ranter 👋🏻'
    }
  }
}

export default HelloResolver
