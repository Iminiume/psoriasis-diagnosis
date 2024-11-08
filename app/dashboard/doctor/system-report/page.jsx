import dynamic from "next/dynamic";
import React from "react";

const SystemReport = dynamic(
  () => import("@/view/dashboard/doctor/system-report"),
);

function Page() {
  return <SystemReport />;
}

export default Page;
