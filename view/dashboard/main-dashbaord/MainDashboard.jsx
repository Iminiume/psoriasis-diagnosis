"use client";
import React from "react";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum } from "@/utils/enum/role-enum";

import PatientDashboard from "../patient/patient-dashboard";
import DoctorDashboard from "../doctor/doctor-dashborad";
import AdminDashboard from "../admin/admin-dashboard";

function MainDashboard() {
  const { state } = useUserContext();
  return (
    <div className="flex h-full overflow-y-auto p-8">
      {state.role === RoleEnum.DOCTOR ? (
        <DoctorDashboard />
      ) : state.role === RoleEnum.ADMIN ? (
        <AdminDashboard />
      ) : (
        <PatientDashboard />
      )}
    </div>
  );
}

export default MainDashboard;
