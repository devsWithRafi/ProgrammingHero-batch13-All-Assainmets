import { jwtClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { success } from 'zod';
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  fetchOptions: {
    credentials: 'include',
  },
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
