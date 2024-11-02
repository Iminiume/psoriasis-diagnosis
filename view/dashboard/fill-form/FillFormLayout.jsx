"use client";
import PatientAPI from "@/api/patient";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import React, { useEffect, useRef, useState } from "react";
import ModalContent from "../dashboard-modal-content";
import { Consts, FormItems } from "./consts";
import Datepicker from "@/components/datepicker";

function FillFormLayout() {
  const { state: authState, setToken } = useAuthContext();
  const [formValues, setFormValues] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { data, loading, error, refetch } = PatientAPI.CreatePatient({
    formValues,
    token: authState.token,
  });
  const { addNotification } = useNotificationContext();
  const modalRef = useRef(null);

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    const requiredFields = FormItems.map((item) => item.key);
    setIsFormComplete(
      requiredFields.every((key) => formValues[key] !== undefined),
    );
  }, [formValues]);

  useEffect(() => {
    if (data) {
      setToken(data?.token);
      handleModalOpen();
    } else if (error) {
      addNotification({
        id: Date.now(),
        type: "error",
        message: Consts.fillFormError,
      });
    }
  }, [data, error]);

  const handleChange = (key, value, type) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: type === "date" ? value.toDate() : value,
    }));
  };

  const handleSubmit = async () => {
    if (isFormComplete) {
      refetch();
    } else {
      addNotification({
        id: Date.now(),
        type: "error",
        message: Consts.fillFormIncomplete,
      });
    }
  };

  const handleModalContent = () => {
    return (
      <ModalContent
        title={Consts.formModalCompleted}
        handleModalClose={handleModalClose}
      />
    );
  };

  return (
    <div className="flex h-full flex-col gap-10">
      {/* Title Section */}
      <div className="flex flex-col gap-6 p-8">
        <Typography size="5xl" weight="bold">
          {Consts.title}
        </Typography>
        <Typography size="3xl" className="text-[#8D8D8D]">
          {Consts.subTitle}
        </Typography>
      </div>

      {/* Dynamic Input Container */}
      <div className="scrollbar-hide flex-grow overflow-y-auto px-8">
        <div className="grid grid-cols-4 gap-6">
          {FormItems.map((item) => {
            const colSpanClass = {
              "1/4": "col-span-1",
              "1/2": "col-span-2",
              full: "col-span-4",
            }[item.width];

            return (
              <div key={item.label} className={`${colSpanClass} flex flex-col`}>
                {item.type === "date" ? (
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">{item.label}</label>
                    <Datepicker
                      value={formValues[item.key]}
                      onChange={(date) => handleChange(item.key, date, "date")}
                      placeholder={item.placeholder}
                    />
                  </div>
                ) : item.type === "radio" ? (
                  <div>
                    <label className="mb-2 font-medium">{item.label}</label>
                    <div className="flex gap-4">
                      {item.options.map((option) => (
                        <Input
                          key={option.label}
                          type="radio"
                          name={item.key}
                          label={option.label}
                          value={option.value}
                          className="cursor-pointer"
                          checked={formValues[item.key] === option.value}
                          onChange={() => handleChange(item.key, option.value)}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <Input
                    label={item.label}
                    placeholder={item.placeholder}
                    type={item.type}
                    onChange={(e) =>
                      handleChange(item.key, e.target.value, item.type)
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit Button Section */}
      <div className="flex w-full justify-end bg-[#1E253A] p-8">
        <Button onClick={handleSubmit} disabled={!isFormComplete || loading}>
          {Consts.continue}
        </Button>
      </div>

      {/* Modal */}
      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </div>
  );
}

export default FillFormLayout;
