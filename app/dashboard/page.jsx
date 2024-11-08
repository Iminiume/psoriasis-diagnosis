import dynamic from "next/dynamic";
import React from "react";

const MainDashbaord = dynamic(() => import("@/view/dashboard/main-dashbaord"));

function Page() {
  return <MainDashbaord />;
}

export default Page;
