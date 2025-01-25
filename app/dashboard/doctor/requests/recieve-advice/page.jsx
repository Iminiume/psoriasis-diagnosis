import dynamic from "next/dynamic";
import React from "react";

const DoctorRecieveAdvice = dynamic(
  () => import("@/view/dashboard/doctor/requests/recieve-advice"),
);

function Page() {
  return <DoctorRecieveAdvice />;
}

export default Page;
