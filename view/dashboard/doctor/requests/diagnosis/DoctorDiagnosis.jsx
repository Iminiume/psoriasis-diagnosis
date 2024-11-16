"use client";
import React from "react";
import { Consts, FormItems } from "./consts";
import DiagnosisLayout from "@/features/diagnosis-layout";

function DiseaseDiagnosis() {
  const calculateResult = (answers) => {
    const yesCount = answers.filter((answer) => answer === true).length;
    const percentage = (yesCount / FormItems.length) * 0.75 * 100;
    const isAfflicted = percentage > 18.75;
    return { percentage, isAfflicted };
  };

  return (
    <DiagnosisLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      constants={Consts}
      calculateResult={calculateResult}
    />
  );
}

export default DiseaseDiagnosis;
