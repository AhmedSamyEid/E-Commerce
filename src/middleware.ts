import { NextRequest, NextResponse } from "next/server";

export function middleware(signup: NextRequest) {
  const token = signup.cookies.get("token")?.value;
  const { pathname } = signup.nextUrl;
  const isLoginPage = pathname === "/auth/login";
  const isSigunpPage = pathname === "/auth/signup";
  if (token && (isLoginPage || isSigunpPage)) {
    return NextResponse.redirect(new URL("/", signup.url));
  }
  if (!token && !isLoginPage && !isSigunpPage) {
    return NextResponse.redirect(new URL("/auth/login", signup.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)", 
  ],
};

