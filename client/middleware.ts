import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of protected routes
const protectedRoutes = ["/dashboard", "/authorized-users", "/register"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // Check if it's a protected route and if the wallet is not connected
  if (isProtectedRoute) {
    const walletConnected = request.cookies.get("walletConnected")?.value === "true"

    if (!walletConnected) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}

