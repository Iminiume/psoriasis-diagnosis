import { NextResponse } from "next/server";

export default function loginMiddleware(request) {
  const token = request.cookies.get("token")?.value || null;

  if (token) {
    console.log("Login middleware: Already signed in");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
