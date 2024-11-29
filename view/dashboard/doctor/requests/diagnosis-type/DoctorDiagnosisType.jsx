"use client";
import DoctorAPI from "@/api/doctor";
import { Consts, FormItems } from "./consts";
import { usePatientContext } from "@/utils/context/usePatientContext";
import { psoriazisType } from "@/utils/psoriazisType";
import DynamicDiagnosisTypeLayout from "@/features/diagnosis-type-layout";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function DoctorDiagnosisType() {
  const router = useRouter();
  const pathname = usePathname();

  const { patientData } = usePatientContext();
  const { addNotification } = useNotificationContext();

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
    <DynamicDiagnosisTypeLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      api={DoctorAPI.DiagnosisType}
      constants={{
        ...Consts,
        modalTitle: (data) =>
          `${Consts.systemRecommendation} ${data ? psoriazisType(data?.diagnosis) : Consts.notDetermined} ${Consts.is}`,
      }}
      userInfo={patientData}
      onSuccess={(data) => console.log("Diagnosis successful:", data)}
      onError={(err) => console.log("Diagnosis error:", err)}
    />
  );
}

export default DoctorDiagnosisType;
