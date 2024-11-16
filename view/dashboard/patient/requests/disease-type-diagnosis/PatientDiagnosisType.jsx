"use client";
import { Consts, FormItems } from "./consts";
import { usePatientContext } from "@/utils/context/usePatientContext";
import { psoriazisType } from "@/utils/psoriazisType";
import DynamicDiagnosisTypeLayout from "@/features/diagnosis-type-layout";
import PatientAPI from "@/api/patient";

function DoctorDiagnosisType() {
  const { patientData } = usePatientContext();

  return (
    <DynamicDiagnosisTypeLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      formItems={FormItems}
      api={PatientAPI.DiagnosisType}
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
