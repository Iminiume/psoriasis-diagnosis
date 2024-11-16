"use client";
import PatientAPI from "@/api/patient";
import { Consts, FormItems } from "./consts";
import FillFormLayout from "@/features/fill-form-layout";

function PatientForm() {
  return (
    <FillFormLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      api={PatientAPI.CreatePatient}
      constants={Consts}
      onSuccess={(data) => {
        console.log("Patient created successfully", data);
      }}
    />
  );
}

export default PatientForm;
