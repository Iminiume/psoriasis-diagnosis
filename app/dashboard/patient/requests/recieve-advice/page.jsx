import dynamic from "next/dynamic";
import React from "react";

const RecieveAdvice = dynamic(
  () => import("@/view/dashboard/patient/requests/recieve-advice"),
);

function Page() {
  return <RecieveAdvice />;
}

export default Page;
