import dynamic from "next/dynamic";
import React from "react";

const DiseaseTypeDiagnosis = dynamic(
  () => import("@/view/dashboard/patient/requests/disease-type-diagnosis"),
);

function Page() {
  return <DiseaseTypeDiagnosis />;
}

export default Page;
