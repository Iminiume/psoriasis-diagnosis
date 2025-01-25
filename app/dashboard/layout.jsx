"use client";

import PatientAPI from "@/api/patient";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useUserContext } from "@/utils/context/useUserContext";
import { useEffect, useState } from "react";
import { RoleEnum } from "@/utils/enum/role-enum";
import { PatientProvider } from "@/context/patient-context";
import dynamic from "next/dynamic";
import DoctorAPI from "@/api/doctor";
import AdminAPI from "@/api/admin";

const DashboardLayout = dynamic(
  () => import("@/view/dashboard/DashboardLayout"),
);

export default function Layout({ children }) {
  const { state, dispatch } = useUserContext();
  const { state: authState } = useAuthContext();
  const [mainData, setMainData] = useState(null);

  const [{ data: patientData }, PatientRefetch] = PatientAPI.GetPatient({
    token: authState.token,
  });

  const [{ data: doctorData }, DoctorReftech] = DoctorAPI.GetDoctor({
    token: authState.token,
  });

  const [{ data: adminData }, AdminRefetch] = AdminAPI.GetAdmin({
    token: authState.token,
  });

  useEffect(() => {
    setMainData(patientData || doctorData || adminData);
    (state.role === RoleEnum.PATIENT || state.role === "") &&
      dispatch({ type: "SET_USER_DATA", payload: patientData });

    state.role === RoleEnum.DOCTOR &&
      dispatch({ type: "SET_USER_DATA", payload: doctorData });

    state.role === RoleEnum.ADMIN &&
      dispatch({ type: "SET_USER_DATA", payload: adminData });
  }, [patientData, doctorData, adminData, state.role, dispatch]);

  useEffect(() => {
    (state.role === RoleEnum.PATIENT || state.role === "") && PatientRefetch();

    state.role === RoleEnum.DOCTOR && DoctorReftech();

    state.role === RoleEnum.ADMIN && AdminRefetch();
  }, [state.role]);

  return (
    <main className="w-full flex-grow">
      <PatientProvider>
        <DashboardLayout data={mainData}>{children}</DashboardLayout>
      </PatientProvider>
    </main>
  );
}
