import { ObjectType, Field, Int, InputType } from 'type-graphql'
import { Post, CreatePostInput } from '@graphql/types/Post'
import { Profile, CreateProfileInput } from '@graphql/types/Profile'

@InputType()
export class UserInput {
  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String)
  email: string

  @Field(() => [CreatePostInput], { nullable: true })
  posts?: CreatePostInput[]

  @Field(() => CreateProfileInput, { nullable: true })
  profile?: CreateProfileInput
}

@ObjectType()
export class User {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String)
  email: string

  @Field(() => [Post], { nullable: true })
  posts: Post[]

  @Field(() => Profile, { nullable: true })
  profile?: Profile
}
