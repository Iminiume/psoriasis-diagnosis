import dynamic from "next/dynamic";
import React from "react";

const PatientRequestsLayout = dynamic(
  () => import("@/view/dashboard/patient/requests"),
);

function page() {
  return <PatientRequestsLayout />;
}

export default page;
