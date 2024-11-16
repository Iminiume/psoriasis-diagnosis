"use client";
import React from "react";
import DoctorAPI from "@/api/doctor";
import { Consts, FormItems } from "./consts";
import { usePatientContext } from "@/utils/context/usePatientContext";
import FillFormLayout from "@/features/fill-form-layout";

function CreatePatient() {
  const { setPatientData } = usePatientContext();

  const handleSuccess = (data) => {
    setPatientData(data);
    console.log("Patient data saved successfully", data);
  };

  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      api={DoctorAPI.CreatePatient}
      constants={Consts}
      onSuccess={handleSuccess}
      onError={(err) => console.log("Error submitting form", err)}
    />
  );
}

export default CreatePatient;
