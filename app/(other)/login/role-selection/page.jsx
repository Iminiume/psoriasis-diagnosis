"use client";

import React, { useEffect } from "react";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const RoleSelectionLayout = dynamic(() => import("@/view/role-selection"));

function Page() {
  const { state } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!state.token) {
      router.replace("/login");
    }
  }, [state]);

  return <RoleSelectionLayout />;
}

export default Page;
