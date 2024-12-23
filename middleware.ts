import { NextResponse } from 'next/server';


export async function middleware(req:any) {
  

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
