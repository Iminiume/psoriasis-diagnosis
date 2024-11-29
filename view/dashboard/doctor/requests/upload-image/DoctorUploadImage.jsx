"use client";
import DoctorAPI from "@/api/doctor";
import { Consts } from "./consts";
import UploadImageLayout from "@/features/upload-image-layout";
import { usePatientContext } from "@/utils/context/usePatientContext";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { psoriazisType } from "@/utils/psoriazisType";

function DoctorUploadImage() {
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
    <UploadImageLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      api={DoctorAPI.UploadImage}
      constants={{
        ...Consts,
        modalTitle: (data) =>
          `${Consts.result} ${data ? psoriazisType(data) : Consts.notDetermined} ${Consts.is}`,
      }}
      validateFile={(file) => {
        if (
          file.type !== "image/jpeg" ||
          file.name.split(".").pop() !== "jpg"
        ) {
          return Consts.imageFormatError; // Return error message
        }
        return null; // No validation error
      }}
      additionalData={{ phone_number: patientData?.phone_number }}
      onSuccess={(data) => console.log("Doctor Image Uploaded:", data)}
      onError={(err) => console.error("Doctor Upload Error:", err)}
    />
  );
}

export default DoctorUploadImage;
