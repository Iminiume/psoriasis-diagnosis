import { NextResponse } from "next/server";

export default function dashboardMiddleware(request) {
  const token = request.cookies.get("token")?.value || null;

  if (!token) {
    console.log("Dashboard middleware: Access denied");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("Dashboard middleware: Access granted");
  return NextResponse.next();
}
