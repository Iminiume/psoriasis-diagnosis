"use client";
import PatientAPI from "@/api/patient";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import React, { useEffect, useRef, useState } from "react";
import ImageUpload from "@/public/images/UploadImage.png";
import Image from "@/components/image";
import { Consts, PsoriazisTypes } from "./consts";
import ModalContent from "@/view/dashboard/components/modal-content";
import SectionLayout from "@/view/dashboard/components/section-layout";
import { psoriazisType } from "@/utils/psoriazisType";

function UploadImage() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const modalRef = useRef();
  const { state } = useAuthContext();

  const [{ data, loading, error }, refetch] = PatientAPI.UploadImage({
    token: state.token,
  });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    if (data && !loading && !error) handleModalOpen();
  }, [data, loading, error]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setFile(formData);
      setIsFileUploaded(true);
      setProgress(0);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

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
          (diagnosisType ? diagnosisType.title : Consts.notDeterminedFa) +
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
      <div className="flex h-full items-center justify-center">
        <div className="relative flex min-h-[15rem] min-w-[30rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primaryColor bg-[#26335D] p-8">
          <div>
            {isFileUploaded ? (
              // TODO: Should change this section to react drop zone and react dnd
              <Image
                src={previewUrl}
                alt="Uploaded Preview"
                width={500}
                height={300}
                className="object-contain"
              />
            ) : (
              <Image src={ImageUpload} alt="Upload Icon" />
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

          {progress > 0 && (
            <div className="relative mt-4 w-full">
              <div className="h-2 w-full rounded bg-gray-200">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-2 rounded bg-blue-500"
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </SectionLayout>
  );
}

export default UploadImage;
