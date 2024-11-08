import dynamic from "next/dynamic";
import React from "react";

const FillFormLayout = dynamic(
  () => import("@/view/dashboard/doctor/fill-form"),
);

function Page() {
  return <FillFormLayout />;
}

export default Page;
