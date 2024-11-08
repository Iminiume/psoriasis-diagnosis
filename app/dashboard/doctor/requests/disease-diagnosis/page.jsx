import dynamic from "next/dynamic";
import React from "react";

const DiseaseDiagnosis = dynamic(
  () => import("@/view/dashboard/doctor/requests/disease-diagnosis"),
);

function Page() {
  return <DiseaseDiagnosis />;
}

export default Page;
