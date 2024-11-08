import React from "react";
import dynamic from "next/dynamic";

const UiComponentView = dynamic(() => import("@/view/ui-components"));

function Page() {
  return <UiComponentView />;
}

export default Page;
