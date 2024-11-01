"use client";
import PatientAPI from "@/api/patient";
import Button from "@/components/button";
import IconRenderer from "@/components/icon/IconRenderer";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { useUserContext } from "@/utils/context/useUserContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const text = {
  title: "اطالاعات خود را وارد کنید",
  subTitle: "تکمیل پرونده الکترونیکی سلامت",
  continue: "ادامه",
  confirmAndContinue: "تایید و ادامه",
  edit: "ویرایش",
  fillFormIncomplete: "لطفا فرم را کامل کنید",
  fillFormError: "مشکلی در ارسال فرم بوجود آمده، لطفا مجددا تلاش کنید",
  formModalCompleted: "پرونده الکترونیک سلامت برای شما ایجاد شد.",
};

const formText = [
  {
    label: "نام",
    placeholder: "نام خود را وارد کنید",
    type: "text",
    width: "1/4",
    key: "first_name",
  },
  {
    label: "نام خانوادگی",
    placeholder: "نام خانوادگی خود را وارد کنید",
    type: "text",
    width: "1/4",
    key: "last_name",
  },
  {
    label: "تاریخ تولد",
    placeholder: "تاریخ تولد خود را وارد کنید",
    type: "date",
    width: "1/2",
    key: "birth_date",
  },
  {
    label: "شغل",
    placeholder: "شغل خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "job",
  },
  {
    label: "کد ملی",
    placeholder: "کد ملی خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "national_id",
  },
  {
    label: "جنسیت",
    type: "radio",
    options: [
      { label: "مرد", value: "Male" },
      { label: "زن", value: "Female" },
    ],
    width: "1/4",
    key: "gender",
  },
  {
    label: "وضعیت تاهل",
    type: "radio",
    options: [
      { label: "متاهل", value: true },
      { label: "مجرد", value: false },
    ],
    width: "1/4",
    key: "is_married",
  },

  {
    label: "شهر محل سکونت",
    placeholder: "شهر محل سکونت خود را وارد کنید",
    type: "text",
    width: "1/2",
    key: "city",
  },
  {
    label: "آدرس دقیق",
    placeholder: "آدرس دقیق خود را وارد کنید",
    type: "text",
    width: "full",
    key: "address",
  },
];

function FillFormLayout() {
  const { state, dispatch } = useUserContext();
  const { state: authState, setToken } = useAuthContext();
  const router = useRouter();
  const [formValues, setFormValues] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { data, loading, error, refetch } = PatientAPI.CreatePatient({
    formValues,
    token: authState.token,
  });
  const { addNotification } = useNotificationContext();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!state.role) router.replace("/login/role-selection");
  }, [state]);

  useEffect(() => {
    const requiredFields = formText.map((item) => item.key);
    setIsFormComplete(
      requiredFields.every((key) => formValues[key] !== undefined),
    );
  }, [formValues]);

  const handleChange = (key, value, type) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: type === "date" ? new Date(value).toISOString() : value,
    }));
  };

  const handleSubmit = async () => {
    if (isFormComplete) {
      refetch();
    } else {
      addNotification({
        id: Date.now(),
        type: "error",
        message: text.fillFormIncomplete,
      });
    }
  };

  useEffect(() => {
    if (data) {
      setToken(data?.token);
      handleOpenModal();
    } else if (error) {
      addNotification({
        id: Date.now(),
        type: "error",
        message: text.fillFormError,
      });
    }
  }, [data, error]);

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  const handleOpenModal = () => {
    modalRef.current.open();
  };

  const FormModalContent = () => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col border-b border-[#737373] pb-6 text-center">
          <div>
            <span className="cursor-pointer" onClick={handleCloseModal}>
              <IconRenderer icon="xClose" />
            </span>
          </div>
          <div>
            <Typography>{text.formModalCompleted}</Typography>
          </div>
        </div>
        <div className="flex justify-between gap-3 pt-8">
          <Button mode="primary" onClick={() => router.replace("/dashboard")}>
            {text.confirmAndContinue}
          </Button>
          <Button mode="secondary" onClick={handleCloseModal}>
            {text.edit}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Typography size="5xl" weight="bold">
          {text.title}
        </Typography>
        <Typography size="3xl" className="text-[#8D8D8D]">
          {text.subTitle}
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {formText.map((item) => {
          const colSpanClass = {
            "1/4": "col-span-1",
            "1/2": "col-span-2",
            full: "col-span-4",
          }[item.width];

          return (
            <div key={item.label} className={`${colSpanClass} flex flex-col`}>
              {item.type === "radio" ? (
                <div>
                  <label className="mb-2 font-medium">{item.label}</label>
                  <div className="flex gap-4">
                    {item.options.map((option) => (
                      <Input
                        type="radio"
                        name={item.key}
                        label={option.label}
                        value={option.value}
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
                  onChange={(value) => handleChange(item.key, value, item.type)}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-end">
        <Button onClick={handleSubmit} disabled={!isFormComplete || loading}>
          {text.continue}
        </Button>
      </div>

      <Modal ref={modalRef}>
        <FormModalContent />
      </Modal>
    </div>
  );
}

export default FillFormLayout;
