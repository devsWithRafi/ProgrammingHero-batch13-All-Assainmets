import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/books') return NextResponse.next();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (pathname.startsWith('/auth/')) {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/profile/:path*', '/books/:path*'],
};
