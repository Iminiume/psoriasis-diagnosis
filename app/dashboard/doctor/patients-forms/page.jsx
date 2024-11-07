"use client";
import DoctorAPI from "@/api/doctor";
import PatientsForms from "@/view/dashboard/doctor/patients-forms";
import React from "react";
import Loading from "../../loading";

function Page() {
  const [{ data, loading, error }] = DoctorAPI.GetPatients();

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientsForms data={data} />;
}

export default Page;
