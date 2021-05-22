import { FusionAuthClient } from '@fusionauth/typescript-client';
import ClientResponse from '@fusionauth/typescript-client/build/src/ClientResponse';
import { Injectable } from '@nestjs/common';
import {
  FUSIONAUTH_API_KEY,
  FUSIONAUTH_TEMPLATE_TENANT_ID,
  FUSIONAUTH_URL,
} from '../config';
import { buildGroupPayload, roles } from './auth.lib';
import { CreateAuthInput } from './dto/create-auth.input';
import { CreateMerchantInput } from './dto/create-merchant.input';
import { UpdateAuthInput } from './dto/update-auth.input';

const client = new FusionAuthClient(FUSIONAUTH_API_KEY, FUSIONAUTH_URL);

@Injectable()
export class AuthService {
  create(createAuthInput: CreateAuthInput) {
    return 'This action adds a new auth';
  }

  async findAll() {
    return [{ exampleField: 2 }];
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async createMerchant(createMerchantInput: CreateMerchantInput) {
    try {
      const { name: merchantName } = createMerchantInput;
      const {
        response: { tenant },
      } = await client.retrieveTenant(FUSIONAUTH_TEMPLATE_TENANT_ID);
      const {
        response: { tenant: newTenant },
      } = await client.createTenant(null, {
        sourceTenantId: tenant.id,
        tenant: { name: merchantName },
      });

      const tenantClient = new FusionAuthClient(
        FUSIONAUTH_API_KEY,
        FUSIONAUTH_URL,
        newTenant.id,
      );
      const {
        response: { application },
      } = await tenantClient.createApplication(null, {
        application: {
          name: `${merchantName}-HooliApp`,
          roles: Object.values(roles),
          loginConfiguration: {
            allowTokenRefresh: true,
            generateRefreshTokens: true,
          },
        },
      });
      const groupPayload = buildGroupPayload(application.roles);
      const createGroups = groupPayload.map((gp) =>
        tenantClient.createGroup(null, gp),
      );
      await Promise.all(createGroups);

      return {
        id: newTenant.id,
        ...createMerchantInput,
      };
    } catch (error) {
      if (error instanceof ClientResponse) {
        console.log(error.exception);
      }
      console.log(error);
    }
  }
}
