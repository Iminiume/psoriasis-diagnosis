import dynamic from "next/dynamic";
import React from "react";

const DiseaseTypes = dynamic(() => import("@/view/disease-types"));

function Page() {
  return <DiseaseTypes />;
}

export default Page;
