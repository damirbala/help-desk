import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Example middleware for authentication or other purposes
  // For now, just pass through all requests
  return NextResponse.next()
}
