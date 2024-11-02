"use client";

import React, { useEffect } from "react";
import RoleSelectionLayout from "@/view/role-selection/RoleSelectionLayout";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useRouter } from "next/navigation";

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
