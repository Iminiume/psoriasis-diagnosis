"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Typography from "@/components/typography";
import { useUserContext } from "@/utils/context/useUserContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const text = {
  title: "اطالاعات خود را وارد کنید",
  subTitle: "تکمیل پرونده الکترونیکی سلامت",
  continue: "ادامه",
};

const formText = (role) => {
  return (
    role === "patient" && [
      {
        label: "نام",
        placeholder: "نام خود را وارد کنید",
        type: "text",
        width: "1/4",
      },
      {
        label: "نام خانوادگی",
        placeholder: "نام خانوادگی خود را وارد کنید",
        type: "text",
        width: "1/4",
      },
      {
        label: "تاریخ تولد",
        placeholder: "تاریخ تولد خود را وارد کنید",
        type: "date",
        width: "1/2",
      },
      {
        label: "قد",
        placeholder: "قد خود را وارد کنید",
        type: "number",
        width: "1/4",
      },
      {
        label: "وزن",
        placeholder: "وزن خود را وارد کنید",
        type: "number",
        width: "1/4",
      },
      {
        label: "کد ملی",
        placeholder: "کد ملی خود را وارد کنید",
        type: "text",
        width: "1/2",
      },
      {
        label: "جنسیت",
        placeholder: "جنسیت خود را وارد کنید",
        type: "text",
        width: "1/4",
      },
      {
        label: "وضعیت تاهل",
        placeholder: "وضعیت تاهل خود را وارد کنید",
        type: "text",
        width: "1/4",
      },

      {
        label: "شهر محل سکونت",
        placeholder: "شهر محل سکونت خود را وارد کنید",
        type: "text",
        width: "1/2",
      },
      {
        label: "آدرس دقیق",
        placeholder: "آدرس دقیق خود را وارد کنید",
        type: "text",
        width: "full",
      },
    ]
  );
};

function FillFormLayout() {
  const { state } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!state.role) router.push("/login/role-selection");
  }, [state]);

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
        {formText(state.role).map((item) => {
          const colSpanClass = {
            "1/4": "col-span-1",
            "1/2": "col-span-2",
            full: "col-span-4",
          }[item.width];

          return (
            <div key={item.label} className={`${colSpanClass} flex flex-col`}>
              <Input
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
              />
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-end">
        <Button>{text.continue}</Button>
      </div>
    </div>
  );
}

export default FillFormLayout;
