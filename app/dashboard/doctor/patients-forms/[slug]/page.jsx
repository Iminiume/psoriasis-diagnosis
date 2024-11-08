"use client";
import DoctorAPI from "@/api/doctor";
import dynamic from "next/dynamic";
import React from "react";

const PatientForm = dynamic(
  () => import("@/view/dashboard/doctor/patients-forms/patient-form"),
);
const Loading = dynamic(() => import("@/app/dashboard/loading"), {
  ssr: false,
});

function page(props) {
  const [{ data, loading, error }] = DoctorAPI.GetPatients();

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientForm data={data} slug={props.params.slug} />;
}

export default page;
