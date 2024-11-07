"use client";

import { useContext } from "react";
import { PatientContext } from "@/context/patient-context";

export const usePatientContext = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw Error("No PatientContext");
  }
  return context;
};
