import dynamic from "next/dynamic";
import React from "react";

const UploadImage = dynamic(
  () => import("@/view/dashboard/patient/requests/upload-image"),
);

function Page() {
  return <UploadImage />;
}

export default Page;
