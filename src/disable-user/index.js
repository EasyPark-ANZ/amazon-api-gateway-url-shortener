const { CognitoIdentityProviderClient, AdminDisableUserCommand } = require("@aws-sdk/client-cognito-identity-provider");

const client = new CognitoIdentityProviderClient({});

exports.handler = async (event) => {
  const { userPoolId, userName } = event;

  await client.send(new AdminDisableUserCommand({
    UserPoolId: userPoolId,
    Username: userName,
  }));

  return event;
};
