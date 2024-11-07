"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts, FormItems } from "./consts";
import Link from "next/link";
import StepCard from "../../components/step-card";
import { useUserContext } from "@/utils/context/useUserContext";

function PatientRequestsLayout() {
  const { state } = useUserContext();
  console.log(state);
  return (
    <SectionLayout hasButton={false} title={Consts.title}>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {FormItems(!state?.userData?.DoctorComment).map((item) =>
          item.disabled ? (
            <div key={item.label} className="pointer-events-none">
              <StepCard
                icon={item.icon}
                label={item.label}
                disabled={item.disabled}
              />
            </div>
          ) : (
            <Link key={item.label} href={item.link}>
              <StepCard
                icon={item.icon}
                label={item.label}
                disabled={item.disabled}
              />
            </Link>
          ),
        )}
      </div>
    </SectionLayout>
  );
}

export default PatientRequestsLayout;
