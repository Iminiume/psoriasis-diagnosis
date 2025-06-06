"use client";
import ReportAPI from "@/api/report";
import { useAuthContext } from "@/utils/context/useAuthContext";
import dynamic from "next/dynamic";
import React, { use } from "react";

const PatientForm = dynamic(
  () => import("@/view/dashboard/doctor/patients-forms/patient-form"),
);
const Loading = dynamic(() => import("@/app/dashboard/loading"), {
  ssr: false,
});

function Page({ params }) {
  const { slug } = use(params);
  const { state } = useAuthContext();

  const [{ data, loading, error }] = ReportAPI.GetPatientDetails({
    slug: slug,
    token: state.token,
  });

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientForm data={data} />;
}

export default Page;
