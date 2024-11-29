"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useAuthContext } from "@/utils/context/useAuthContext";
import DoctorAPI from "@/api/doctor";

const SearchPatientsLayout = dynamic(
  () => import("@/view/dashboard/doctor/search-patients"),
);

function Page() {
  const { state } = useAuthContext();
  const [{ data, loading }] = DoctorAPI.GetPatients({ token: state.token });

  return <SearchPatientsLayout data={data} />;
}

export default Page;
