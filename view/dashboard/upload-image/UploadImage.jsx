"use client";
import PatientAPI from "@/api/patient";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import React, { useCallback, useRef, useState } from "react";
import ImageUpload from "@/public/images/UploadImage.png";
import Image from "@/components/image";
const Texts = {
  title: "ارسال عکس",
  subTitle: "عکس ضایعه پوستی خود را ارسال کنید",
  send: "ارسال",
  forUploading: "برای آپلود عکس",
  click: "کلیک کنید",
  drag: "یا فایل را اینجا رها کنید",
  result: "نتیجه",
};

function UploadImage() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const modalRef = useRef();
  const [serverData, setServerData] = useState(null);
  const { state } = useAuthContext();

  const { data, loading, error, refetch } = PatientAPI.UploadImage({
    token: state.token,
    file,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setFile(formData);
      setIsFileUploaded(true);
      setProgress(0);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    try {
      refetch({
        data: file,
        onUploadProgress: (progressEvent) => {
          const percentComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setProgress(percentComplete);
        },
      });

      if (data) {
        setServerData(data);
        modalRef.current.open();
      }
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const ModalContent = useCallback(
    () => (
      <div className="flex flex-col">
        <div className="border-b border-[#737373] pb-8">
          <Typography weight="bold" size="2xl">
            {Texts.result}
          </Typography>
        </div>
        <div>{serverData}</div>
      </div>
    ),
    [serverData],
  );

  return (
    <div className="flex h-full flex-col gap-10">
      <div className="flex flex-col gap-6 p-8">
        <Typography size="5xl" weight="bold">
          {Texts.title}
        </Typography>
        <Typography size="3xl" className="text-[#8D8D8D]">
          {Texts.subTitle}
        </Typography>
      </div>

      {/* Image Upload Input and Progress Bar */}
      <div className="flex flex-grow items-center justify-center px-8">
        <div className="relative flex h-[15rem] w-[30rem] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primaryColor bg-[#26335D] p-8">
          <div>
            <Image src={ImageUpload} />
          </div>

          <div className="flex flex-wrap justify-center gap-1">
            <Typography size="xl" weight="bold">
              {Texts.forUploading}
            </Typography>
            <Typography size="xl" weight="bold" className="text-primaryColor">
              {Texts.click}
            </Typography>
            <Typography size="xl" weight="bold">
              {Texts.drag}
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
          {Texts.send}
        </Button>
      </div>

      {/* Modal Component */}
      <Modal ref={modalRef}>
        <ModalContent />
      </Modal>
    </div>
  );
}

export default UploadImage;
