import React from "react";
import dynamic from "next/dynamic";

const ExerciseAdvice = dynamic(() => import("@/view/advices/exercise-advice"));

function page() {
  return <ExerciseAdvice />;
}

export default page;
