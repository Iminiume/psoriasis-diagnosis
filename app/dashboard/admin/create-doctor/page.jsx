import dynamic from "next/dynamic";
import React from "react";

const CreateDoctor = dynamic(
  () => import("@/view/dashboard/admin/create-doctor"),
);

function Page() {
  return <CreateDoctor />;
}

export default Page;
