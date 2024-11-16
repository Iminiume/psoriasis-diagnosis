import dynamic from "next/dynamic";
import React from "react";

const DiseaseDiagnosis = dynamic(
  () => import("@/view/dashboard/patient/requests/diagnosis"),
);

function Page() {
  return <DiseaseDiagnosis />;
}

export default Page;
