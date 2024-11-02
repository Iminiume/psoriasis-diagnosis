"use client";
import PatientAPI from "@/api/patient";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ImageUpload from "@/public/images/UploadImage.png";
import Image from "@/components/image";
import ModalContent from "../dashboard-modal-content";
import { Consts, PsoriazisTypes } from "./consts";

function UploadImage() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const modalRef = useRef();
  const { state } = useAuthContext();

  const { data, loading, error, refetch } = PatientAPI.UploadImage({
    token: state.token,
    file,
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
      refetch();
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleModalContent = () => {
    if (!data) return;

    const diagnosisType = PsoriazisTypes.find((type) => type.value === data);

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
    <div className="flex h-full flex-col gap-10">
      <div className="flex flex-col gap-6 p-8">
        <Typography size="5xl" weight="bold">
          {Consts.title}
        </Typography>
        <Typography size="3xl" className="text-[#8D8D8D]">
          {Consts.subTitle}
        </Typography>
      </div>

      {/* Image Upload Input and Progress Bar */}
      <div className="flex flex-grow items-center justify-center px-8">
        <div className="relative flex min-h-[15rem] min-w-[30rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primaryColor bg-[#26335D] p-8">
          <div>
            {isFileUploaded ? (
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

      {/* Button Section */}
      <div className="flex w-full justify-end bg-[#1E253A] p-8">
        <Button onClick={handleSubmit} disabled={!isFileUploaded}>
          {Consts.send}
        </Button>
      </div>

      {/* Modal Component */}
      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </div>
  );
}

export default UploadImage;
