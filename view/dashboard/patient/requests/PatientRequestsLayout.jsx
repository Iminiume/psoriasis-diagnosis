"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts, FormItems } from "./consts";
import Link from "next/link";
import StepCard from "../../components/step-card";
import { useUserContext } from "@/utils/context/useUserContext";

function PatientRequestsLayout() {
  const { state } = useUserContext();
  const { userData } = state;

  const getLatestDiagnosis = (diagnosisObj) => {
    return Object.entries(diagnosisObj).reduce((latest, [id, diagnosis]) => {
      return !latest || (Number(id) || 0) > (Number(latest.id) || 0)
        ? { id, diagnosis }
        : latest;
    }, null);
  };
  const latestQuestionnaireDiagnosis = getLatestDiagnosis(
    userData?.diagnosis_by_questionnaire || {},
  );
  const latestFormDiagnosis = getLatestDiagnosis(
    userData?.diagnosis_by_form || {},
  );
  const latestImageDiagnosis = getLatestDiagnosis(
    userData?.diagnosis_by_image || {},
  );

  const isDisabled = {
    questionnaire:
      latestQuestionnaireDiagnosis?.diagnosis?.Comments?.length > 0,
    form: latestFormDiagnosis?.diagnosis?.Comments?.length > 0,
    image: latestImageDiagnosis?.diagnosis?.Comments?.length > 0,
  };

  return (
    <SectionLayout hasButton={false} title={Consts.title}>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {FormItems(
          !isDisabled.questionnaire,
          !isDisabled.form || isDisabled.image,
        ).map((item) =>
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
