"use client";
import DoctorAPI from "@/api/doctor";
import { useAuthContext } from "@/utils/context/useAuthContext";
import dynamic from "next/dynamic";
import React from "react";

const PatientForm = dynamic(
  () => import("@/view/dashboard/doctor/patients-forms/patient-form"),
);
const Loading = dynamic(() => import("@/app/dashboard/loading"), {
  ssr: false,
});

function Page(props) {
  const { params } = props;
  const { state } = useAuthContext();

  const [{ data, loading, error }] = DoctorAPI.GetPatientDetails({
    slug: params.slug,
    token: state.token,
  });

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientForm data={data} />;
}

export default Page;
