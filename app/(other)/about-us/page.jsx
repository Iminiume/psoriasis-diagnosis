import dynamic from "next/dynamic";
import React from "react";

const AboutUsLayout = dynamic(() => import("@/view/about-us/AboutUsLayout"));

function Page() {
  return <AboutUsLayout />;
}

export default Page;
