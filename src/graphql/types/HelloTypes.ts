import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class HelloTypes {
    @Field(() => String)
    test: string
}

export default HelloTypes
