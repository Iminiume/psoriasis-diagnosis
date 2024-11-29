"use client";
import React from "react";
import { Consts, FormItems } from "./consts";
import DiagnosisLayout from "@/features/diagnosis-layout";
import PatientAPI from "@/api/patient";

function PatientDiagnosis() {
  return (
    <DiagnosisLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      constants={Consts}
      api={PatientAPI.Questionnaire}
    />
  );
}

export default PatientDiagnosis;
