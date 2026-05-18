import { NextResponse } from 'next/server';

const PROTECTED_ROUTES = ['/profile', '/add-tutor', '/my-tutors', '/my-sessions'];
const AUTH_ROUTES = ['/sign-in', '/sign-up'];

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('better-auth.session_token');

  const isProtected = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));

  // Not logged in, trying to access protected page → redirect to sign-in
  if (!token && isProtected) {
    const loginUrl = new URL('/sign-in', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Already logged in, trying to access auth pages → redirect home
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile',
    '/add-tutor',
    '/my-tutors',
    '/my-sessions',
    '/sign-in',
    '/sign-up',
    '/tutors/:path*',
  ],
};