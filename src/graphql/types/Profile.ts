import { Field, Int, InputType, ObjectType } from 'type-graphql'
import { UserObject } from '@graphql/types/User'

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

  @Field(() => UserObject)
  user: UserObject
}
