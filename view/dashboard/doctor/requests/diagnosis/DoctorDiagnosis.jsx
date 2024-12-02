"use client";
import React, { useEffect } from "react";
import { Consts, FormItems } from "./consts";
import DiagnosisLayout from "@/features/diagnosis-layout";
import { usePathname, useRouter } from "next/navigation";
import { usePatientContext } from "@/utils/context/usePatientContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import DoctorAPI from "@/api/doctor";
import { useUserContext } from "@/utils/context/useUserContext";

function DoctorDiagnosis() {
  const router = useRouter();
  const pathname = usePathname();

  const { patientData } = usePatientContext();
  const { addNotification } = useNotificationContext();
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    if (!patientData) {
      router.replace(
        `/dashboard/doctor/create-patient?referrer=${encodeURIComponent(pathname)}`,
      );
      addNotification({
        id: Date.now(),
        type: "error",
        message: Consts.noPatientError,
      });
    }
  }, [patientData]);
  return (
    <DiagnosisLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      constants={Consts}
      userInfo={patientData}
      api={DoctorAPI.DoctorQuestionnaire}
    />
  );
}

export default DoctorDiagnosis;
