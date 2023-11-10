import { Field, Int, InputType, ObjectType } from 'type-graphql'
import { User } from '@graphql/types/User'

@InputType()
export class CreateProfileInput {
  @Field(() => String, { nullable: true })
  bio?: string

  @Field(() => Int)
  userId: number
}

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true, defaultValue: '' })
  bio: string | null

  @Field(() => Int)
  userId: number

  @Field(() => User)
  user: User
}
