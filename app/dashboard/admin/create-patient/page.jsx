import dynamic from "next/dynamic";
import React from "react";

const CreatePatient = dynamic(
  () => import("@/view/dashboard/admin/create-patient"),
);

function Page() {
  return <CreatePatient />;
}

export default Page;
