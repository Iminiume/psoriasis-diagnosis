import { NextResponse } from "next/server";

export default function adminMiddleware(request) {
  const role = request.cookies.get("role")?.value || null;

  if (role !== "Admin") {
    console.log("Admin middleware: Access denied");
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Admin middleware: Access granted");
  return NextResponse.next();
}
