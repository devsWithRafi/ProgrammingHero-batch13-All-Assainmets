'use server';

import { env } from '@/lib/env';
import { revalidatePath } from 'next/cache';


export const deleteAllBookedSessionsRecords = async ({ token }) => {
  try {
    if (token) {
      const res = await fetch(
        `${env.NEXT_PUBLIC_SERVER_URL}/api/booking/delete-all`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const result = await res.json();
      const validatePaths = ['/my-sessions', '/my-tutors', '/tutors'];
      validatePaths.forEach((route) => revalidatePath(route));
      return result;
    }

    return {
      success: false,
      message: 'Auth-Token not found',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
