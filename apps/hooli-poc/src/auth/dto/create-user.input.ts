import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Firstname' })
  firstName: string;
  @Field(() => String, { description: 'Lastname' })
  lastName: string;
  @Field(() => String, { description: 'Username' })
  username: string;
  @Field(() => String, { description: 'Email' })
  email: string;
  @Field(() => String, { description: 'Password' })
  password: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField: number;
}
