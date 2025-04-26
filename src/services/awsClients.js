import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: "us-east-1" }),
  identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
});

export const awsConfig = {
  region: "us-east-1",
  credentials,
};
