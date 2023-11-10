import { ObjectType, Field, Int, InputType } from 'type-graphql'
import { User } from '@graphql/types/User'

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string

  @Field(() => String, { nullable: true })
  content?: string
}

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field(() => String)
  title: string

  @Field(() => String, { nullable: true })
  content: string | null

  @Field(() => Int)
  authorId: number

  @Field(() => User)
  author: User

  @Field(() => Boolean)
  published: boolean

  @Field(() => Date)
  createdAt: Date
}
