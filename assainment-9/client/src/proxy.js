import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const AuthRouts = ['/sign-in', '/sign-up'];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/tutors') return NextResponse.next();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isAuthRoutes = AuthRouts.some((route) => pathname.startsWith(route));

  if (isAuthRoutes) {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL('/sign-in', request.url);
    if (pathname) loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-tutor', '/tutors/:path*', '/my-tutors', '/my-sessions'],
};
