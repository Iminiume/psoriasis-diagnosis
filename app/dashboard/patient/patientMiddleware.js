import { NextResponse } from "next/server";

export default function patientMiddleware(request) {
  const role = request.cookies.get("role")?.value || null;

  if (role !== "Patient") {
    console.log("Patient middleware: Access denied");
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("Patient middleware: Access granted");
  return NextResponse.next();
}
