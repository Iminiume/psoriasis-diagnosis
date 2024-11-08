import dynamic from "next/dynamic";
import React from "react";

const DoctorRequestsLayout = dynamic(
  () => import("@/view/dashboard/doctor/requests"),
);

function Page() {
  return <DoctorRequestsLayout />;
}

export default Page;
