"use client";
import React, { useState } from "react";
import PatientContext from "./patientContext";

export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState(null);

  return (
    <PatientContext.Provider value={{ patientData, setPatientData }}>
      {children}
    </PatientContext.Provider>
  );
};
