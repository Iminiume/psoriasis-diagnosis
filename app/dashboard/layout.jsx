"use client";

import PatientAPI from "@/api/patient";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useUserContext } from "@/utils/context/useUserContext";
import { useEffect } from "react";
import { RoleEnum } from "@/utils/enum/role-enum";
import { PatientProvider } from "@/context/patient-context";
import dynamic from "next/dynamic";

const DashboardLayout = dynamic(
  () => import("@/view/dashboard/DashboardLayout"),
);

export default function Layout({ children }) {
  const { state, dispatch } = useUserContext();
  const { state: authState } = useAuthContext();

  const [{ data, error, loading }, refetch] = PatientAPI.GetPatient({
    token: authState.token,
  });

  useEffect(() => {
    if (state.role === RoleEnum.PATIENT) {
      dispatch({ type: "SET_USER_DATA", payload: data });
    }
  }, [data, state.role, dispatch]);

  useEffect(() => {
    if (state.role === RoleEnum.PATIENT || state.role === "") {
      refetch();
    }
  }, [state.role]);

  return (
    <main className="w-full flex-grow">
      <PatientProvider>
        <DashboardLayout data={data}>{children}</DashboardLayout>
      </PatientProvider>
    </main>
  );
}
