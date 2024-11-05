"use client";

import PatientAPI from "@/api/patient";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useUserContext } from "@/utils/context/useUserContext";
import DashboardLayout from "@/view/dashboard/DashboardLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";

export default function Layout({ children }) {
  const { state, dispatch } = useUserContext();
  const { state: authState } = useAuthContext();
  const router = useRouter();

  const [{ data, error, loading }] = PatientAPI.GetPatient({
    token: authState.token,
  });

  useEffect(() => {
    if (!authState.token) router.replace("/login");
    else {
      if (!state.role) router.replace("/login/role-selection");
    }
  }, [state]);

  useEffect(() => {
    dispatch({ type: "SET_USER_DATA", payload: data });
  }, [data]);

  if (loading) return <Loading />;

  return (
    <main className="w-full flex-grow">
      <DashboardLayout data={data}>{children}</DashboardLayout>
    </main>
  );
}
