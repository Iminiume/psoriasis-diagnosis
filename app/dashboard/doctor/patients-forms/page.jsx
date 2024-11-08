"use client";
import DoctorAPI from "@/api/doctor";
import React from "react";
import dynamic from "next/dynamic";

const PatientsForms = dynamic(
  () => import("@/view/dashboard/doctor/patients-forms"),
);

const Loading = dynamic(() => import("../../loading"), { ssr: false });

function Page() {
  const [{ data, loading, error }] = DoctorAPI.GetPatients();

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientsForms data={data} />;
}

export default Page;
