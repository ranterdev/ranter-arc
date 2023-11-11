import { Arg, Mutation, Resolver } from 'type-graphql'

import { User } from '@prisma/client'
import prisma from '@services/prisma'
import { UserObject } from '@graphql/types/User'

@Resolver()
export class UserResolver {
  @Mutation(() => UserObject)
  async createUser(
    @Arg('name', { nullable: true }) name: string,
    @Arg('email') email: string
  ): Promise<User> {
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user
  }
}
