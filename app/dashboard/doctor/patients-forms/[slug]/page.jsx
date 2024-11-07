"use client";
import DoctorAPI from "@/api/doctor";
import Loading from "@/app/dashboard/loading";
import PatientForm from "@/view/dashboard/doctor/patients-forms/patient-form";
import React, { useEffect, useState } from "react";

function page(props) {
  const [{ data, loading, error }] = DoctorAPI.GetPatients();

  if (loading) return <Loading />;
  if (!data) return null;

  return <PatientForm data={data} slug={props.params.slug} />;
}

export default page;
