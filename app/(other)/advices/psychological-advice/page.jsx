import React from "react";
import dynamic from "next/dynamic";

const PsychologicalAdvice = dynamic(
  () => import("@/view/advices/psychological-advice"),
);

function page() {
  return <PsychologicalAdvice />;
}

export default page;
