import dynamic from "next/dynamic";
import React from "react";

const FillForm = dynamic(() => import("@/view/dashboard/patient/form"));

function Page() {
  return <FillForm />;
}

export default Page;
