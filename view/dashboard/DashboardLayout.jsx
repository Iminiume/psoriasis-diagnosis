"use client";
import React, { useEffect, useState } from "react";
import { useUserContext } from "@/utils/context/useUserContext";
import RoleCard from "@/components/role-card";
import StepProgress from "@/components/step-progress";

const steps = [
  { label: "تشکیل پرونده", link: "/dashboard/fill-form" },
  { label: "تشخیص بیماری", link: "/dashboard/disease-diagnosis" },
  { label: "تشخیص نوع پسوریازیس", link: "/dashboard/pesoriasis" },
  { label: "بارگذاری تصویر", link: "/dashboard/upload-image" },
  { label: "دریافت توصیه", link: "/dashboard/recieve-advice" },
];

function DashboardLayout({ children }) {
  const { state, dispatch } = useUserContext();
  return (
    <section className="h-screen bg-pinkShadow bg-contain bg-right bg-no-repeat px-8 py-8">
      <div className="mx-auto flex h-full max-w-custom gap-10">
        <div className="flex basis-1/4 flex-col gap-12">
          <RoleCard
            icon={state.role === "Patient" ? "pill" : "stethoScope"}
            text={state.role === "Patient" ? "بیمار" : "دکتر"}
            isSelected
          />
          <StepProgress steps={steps} />
        </div>
        <div className="h-full basis-3/4 rounded-[32px] border p-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export default DashboardLayout;
