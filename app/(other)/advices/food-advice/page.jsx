import React from "react";
import dynamic from "next/dynamic";

const FoodAdvice = dynamic(() => import("@/view/advices/food-advice"));

function page() {
  return <FoodAdvice />;
}

export default page;
