"use client";

import React, { useEffect } from "react";
import { useAuthContext } from "@/utils/context/useAuthContext";
import RoleSelectionLayout from "@/view/role-selection/RoleSelectionLayout";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { state } = useAuthContext();

  // useEffect(() => {
  //   if (!state.isLoggedIn) {
  //     router.push("/login");
  //   }
  // }, [state]);

  return <RoleSelectionLayout />;
}

export default Page;
