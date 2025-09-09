import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /dashboard, /login)
  const path = request.nextUrl.pathname

  // Define paths that should be publicly accessible
  const publicPaths = ["/", "/about-us", "/mortgage-calculator", "/login", "/signup"]

  // Define paths that require authentication
  const protectedPaths = ["/dashboard", "/profile", "/applications"]

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((protectedPath) => path.startsWith(protectedPath))

  // If it's a protected path, the ProtectedRoute component will handle the redirect
  // This middleware is mainly for future server-side protection if needed

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
