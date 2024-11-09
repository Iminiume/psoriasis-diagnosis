"use client";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import React, { useEffect, useRef, useState } from "react";
import ImageUpload from "@/public/images/UploadImage.png";
import CustomImage from "@/components/image";
import { Consts, PsoriazisTypes } from "./consts";
import ModalContent from "@/view/dashboard/components/modal-content";
import SectionLayout from "@/view/dashboard/components/section-layout";
import DoctorAPI from "@/api/doctor";
import { usePatientContext } from "@/utils/context/usePatientContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { usePathname, useRouter } from "next/navigation";
import { psoriazisType } from "@/utils/psoriazisType";

function UploadImage() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const modalRef = useRef();
  const { state } = useAuthContext();
  const { patientData } = usePatientContext();
  const { addNotification } = useNotificationContext();
  const router = useRouter();
  const pathname = usePathname();

  const [{ data, loading, error }, refetch] = DoctorAPI.UploadImage({
    token: state.token,
  });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    if (data && !loading && !error) handleModalOpen();
  }, [data, loading, error]);

  useEffect(() => {
    if (!patientData) {
      router.replace(
        `/dashboard/doctor/requests/create-patient?referrer=${encodeURIComponent(pathname)}`,
      );
      addNotification({
        id: Date.now(),
        type: "error",
        message: Consts.noPatientError,
      });
    }
  }, [patientData]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (
        selectedFile.type !== "image/jpeg" ||
        selectedFile.name.split(".").pop().toLowerCase() !== "jpg"
      ) {
        addNotification({
          id: Date.now(),
          type: "error",
          message: Consts.imageFormatError,
        });
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);

      // img.onload = () => {
      //   if (img.width !== 640 || img.height !== 640) {
      //     addNotification({
      //       id: Date.now(),
      //       type: "error",
      //       message: Consts.imageDimensionError,
      //     });
      //     return;
      //   }
      // };

      const formData = new FormData();
      formData.append("file", selectedFile);
      setFile(formData);
      setIsFileUploaded(true);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    file.append("phone_number", patientData.phone_number);

    try {
      refetch({ data: file });
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleModalContent = () => {
    if (!data) return;
    const diagnosisType = psoriazisType(data);

    return (
      <ModalContent
        title={
          Consts.result +
          " " +
          (diagnosisType ? diagnosisType : Consts.notDeterminedFa) +
          " " +
          Consts.is
        }
        handleModalClose={handleModalClose}
      />
    );
  };
  return (
    <SectionLayout
      title={Consts.title}
      subTitle={Consts.subTitle}
      handleSubmit={handleSubmit}
      isButtonDisabled={!isFileUploaded || loading}
      loading={loading}
    >
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <div className="relative flex min-h-[15rem] min-w-[30rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primaryColor bg-[#26335D] p-8">
          <div>
            {isFileUploaded ? (
              // TODO: Should change this section to react drop zone and react dnd
              <CustomImage
                src={previewUrl}
                alt="Uploaded Preview"
                width={500}
                height={300}
                className="object-contain"
              />
            ) : (
              <CustomImage src={ImageUpload} alt="Upload Icon" />
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-1">
            <Typography size="xl" weight="bold">
              {Consts.forUploading}
            </Typography>
            <Typography size="xl" weight="bold" className="text-primaryColor">
              {Consts.click}
            </Typography>
            <Typography size="xl" weight="bold">
              {Consts.drag}
            </Typography>
          </div>

          <Input
            type="file"
            onChange={handleFileChange}
            className="absolute right-0 top-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>

      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </SectionLayout>
  );
}

export default UploadImage;
