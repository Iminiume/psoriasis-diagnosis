"use client";
import React from "react";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum } from "@/utils/enum/role-enum";
import PatientDashboard from "../patient/patient-dashboard";
import DoctorDashboard from "../doctor/doctor-dashborad";

function MainDashboard() {
  const { state } = useUserContext();
  return (
    <div className="flex h-full overflow-y-auto p-12">
      {state.role === RoleEnum.PATIENT ? (
        <PatientDashboard />
      ) : (
        <DoctorDashboard />
      )}
    </div>
  );
}

export default MainDashboard;
