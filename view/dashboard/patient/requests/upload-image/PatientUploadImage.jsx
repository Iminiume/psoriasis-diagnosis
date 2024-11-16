"use client";
import PatientAPI from "@/api/patient";
import { Consts } from "./consts";
import UploadImageLayout from "@/features/upload-image-layout";
import { psoriazisType } from "@/utils/psoriazisType";

function PatientUploadImage() {
  return (
    <UploadImageLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      api={PatientAPI.UploadImage}
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
      onSuccess={(data) => console.log("Patient Image Uploaded:", data)}
      onError={(err) => console.error("Patient Upload Error:", err)}
    />
  );
}

export default PatientUploadImage;
