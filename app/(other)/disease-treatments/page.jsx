import dynamic from "next/dynamic";
import React from "react";

const DiseaseTreatmets = dynamic(() => import("@/view/disease-treatments"));

function Page() {
  return <DiseaseTreatmets />;
}

export default Page;
