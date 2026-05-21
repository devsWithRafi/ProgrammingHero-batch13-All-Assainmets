import { jwtClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [jwtClient()],
});

export const { signIn, signUp, useSession } = authClient;

export const jwtClientToken = async () => {
  const { data, error } = await authClient.token();

  if (error) {
    return {
      success: false,
      message: 'An error occoured!',
    };
  }

  if (data) {
    const jwtToken = data.token;
    return {
      success: true,
      token: jwtToken,
    };
  }
};
