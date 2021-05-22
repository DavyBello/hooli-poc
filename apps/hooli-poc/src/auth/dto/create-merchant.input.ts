import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMerchantInput {
  @Field(() => String, { description: 'Merchants name' })
  name: string;
  @Field(() => String, { description: 'merchant unqiue slug' })
  slug: string;
}
