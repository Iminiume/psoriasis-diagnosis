"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useAuthContext } from "@/utils/context/useAuthContext";
import ReportAPI from "@/api/report";

const PatientsForms = dynamic(
  () => import("@/view/dashboard/doctor/patients-forms"),
);

const Loading = dynamic(() => import("../../loading"), { ssr: false });

function Page() {
  const { state } = useAuthContext();
  const [{ data, loading, error }] = ReportAPI.GetPatients({
    token: state.token,
  });

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientsForms data={data} />;
}

export default Page;
