import dynamic from "next/dynamic";
import React from "react";

const SystemGuide = dynamic(() => import("@/view/system-guide"));

function Page() {
  return <SystemGuide />;
}

export default Page;
