import Image from "@/components/image";
import Typography from "@/components/typography";
import React from "react";
import { Consts } from "../../consts";
import { psoriazisType } from "@/utils/psoriazisType";

function DiagnosisInfoModal({ selectedDiagnosis }) {
  const neededKeys = ["Questionnaire", "ImageUrl", "DiagnosisDetails"];
  if (!selectedDiagnosis) return;

  return (
    <div className="flex flex-col gap-4">
      {selectedDiagnosis?.ServiceResult && (
        <div className="flex flex-col gap-4 border-b border-cardBorderOp30 pb-2">
          <Typography weight="bold" size="2xl">
            {Consts.systemRecommendation}
          </Typography>

          <Typography size="lg">
            {isNaN(Number(selectedDiagnosis.ServiceResult))
              ? Consts.psoriasis +
                " " +
                psoriazisType(selectedDiagnosis.ServiceResult)
              : Number(selectedDiagnosis.ServiceResult)}
          </Typography>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <Typography weight="bold" size="2xl">
          {Consts.filledForm}
        </Typography>
        {neededKeys.map((key) => {
          if (selectedDiagnosis[key]) {
            switch (key) {
              case "ImageUrl":
                return (
                  <Image
                    key={key}
                    src={selectedDiagnosis[key]}
                    alt="diagnosis-image"
                    width={500}
                    height={500}
                  />
                );

              case "Questionnaire":
                return (
                  <div key={key}>
                    <pre>{JSON.stringify(selectedDiagnosis[key], null, 2)}</pre>
                  </div>
                );

              case "DiagnosisDetails":
                return (
                  <div key={key}>
                    <pre>{JSON.stringify(selectedDiagnosis[key], null, 2)}</pre>
                  </div>
                );

              default:
                return null;
            }
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default DiagnosisInfoModal;
