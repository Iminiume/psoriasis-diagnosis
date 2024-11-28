"use client";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import React, { useEffect, useRef, useState } from "react";
import CustomImage from "@/components/image";
import SectionLayout from "@/view/dashboard/components/section-layout";
import ModalContent from "@/view/dashboard/components/modal-content";
import ImageUpload from "@/public/images/UploadImage.png";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { useAuthContext } from "@/utils/context/useAuthContext";

function UploadImageLayout({
  title,
  subTitle,
  api,
  constants,
  additionalData = {},
  validateFile,
  onSuccess,
  onError,
}) {
  const { addNotification } = useNotificationContext();
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const modalRef = useRef();
  const { state } = useAuthContext();
  const [{ data, loading, error }, refetch] = api({ token: state.token });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    if (data && !loading && !error) {
      handleModalOpen();
      onSuccess?.(data);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validationError = validateFile?.(selectedFile);
      if (validationError) {
        addNotification({
          id: Date.now(),
          type: "error",
          message: constants.imageFormatError,
        });
        onError?.(validationError);
        setFile(null);
        setIsFileUploaded(false);
        setPreviewUrl(null);
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      Object.entries(additionalData).forEach(([key, value]) =>
        formData.append(key, value),
      );

      setFile(formData);
      setIsFileUploaded(true);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    try {
      refetch({ data: file });
    } catch (err) {
      onError?.(err);
    }
  };

  return (
    <SectionLayout
      title={title}
      subTitle={subTitle}
      handleSubmit={handleSubmit}
      isButtonDisabled={!isFileUploaded || loading}
      loading={loading}
    >
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <div className="relative flex min-h-[15rem] max-w-[30rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primaryColor bg-[#26335D] p-8">
          <div>
            {isFileUploaded ? (
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
              {constants.forUploading}
            </Typography>
            <Typography size="xl" weight="bold" className="text-primaryColor">
              {constants.click}
            </Typography>
            <Typography size="xl" weight="bold">
              {constants.drag}
            </Typography>
          </div>

          <Input
            type="file"
            onChange={handleFileChange}
            className="absolute right-0 top-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>

      <Modal ref={modalRef}>
        <ModalContent
          title={constants.modalTitle(data)}
          mainSubtitle={constants.modalSubtitle}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </SectionLayout>
  );
}

export default UploadImageLayout;
