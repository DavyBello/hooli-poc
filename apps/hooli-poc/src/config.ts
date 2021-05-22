export const {
  NODE_ENV,
  FUSIONAUTH_API_KEY,
  FUSIONAUTH_URL,
  FUSIONAUTH_TEMPLATE_TENANT_ID,
} = process.env;

export const isProd = NODE_ENV === 'production';
export const isTest =
  NODE_ENV === 'e2e' || NODE_ENV === 'test' || NODE_ENV === 'jest';
export const isDev = NODE_ENV === 'development' || isTest;
export const isStaging = NODE_ENV === 'staging';
export const ENVIRONMENT = NODE_ENV;
