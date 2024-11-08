import dynamic from "next/dynamic";
import React from "react";

const UploadImage = dynamic(
  () => import("@/view/dashboard/doctor/requests/upload-image"),
);

function Page() {
  return <UploadImage />;
}

export default Page;
