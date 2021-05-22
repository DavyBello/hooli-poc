import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Merchant {
  @Field(() => ID, { description: 'Merchant unique identifier' })
  id: string;
  @Field(() => String, { description: 'Merchants name' })
  name: string;
  @Field(() => String, { description: 'merchant unqiue slug' })
  slug: string;
}
