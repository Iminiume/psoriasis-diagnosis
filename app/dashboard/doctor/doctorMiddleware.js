import { NextResponse } from "next/server";

export default function doctorMiddleware(request) {
  const role = request.cookies.get("role")?.value || null;
 
  if (role !== "Doctor") {
    console.log("Doctor middleware: Access denied");
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Doctor middleware: Access granted");
  return NextResponse.next();
}
