import { NextResponse } from "next/server";
import doctorMiddleware from "./app/dashboard/doctor/doctorMiddleware";
import patientMiddleware from "./app/dashboard/patient/patientMiddleware";
import dashboardMiddleware from "./app/dashboard/dashboardMiddleware";
import loginMiddleware from "./app/login/loginMiddleware";

const middlewareMap = [
  { pathname: "/dashboard/patient", middlewareFn: patientMiddleware },
  { pathname: "/dashboard/doctor", middlewareFn: doctorMiddleware },
  {
    pathname: "/dashboard",
    middlewareFn: dashboardMiddleware,
  },
  { pathname: "/login", middlewareFn: loginMiddleware },
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  for (const item of middlewareMap) {
    if (item.absoluteUrl) {
      if (pathname === item.pathname) {
        return item.middlewareFn(request);
      }
    } else {
      if (pathname.startsWith(item.pathname)) {
        return item.middlewareFn(request);
      }
    }
  }

  return NextResponse.next();
}
