"use client";

import React, { useEffect } from "react";
import { useAuthContext } from "@/utils/context/useAuthContext";
import RoleSelectionLayout from "@/view/role-selection/RoleSelectionLayout";
import { redirect } from "next/navigation";

function Page() {
  const { state } = useAuthContext();

  //   useEffect(() => {
  //     if (!state.isLoading) {
  //       redirect("/login");
  //     }
  //   }, [state]);

  return <RoleSelectionLayout />;
}

export default Page;
