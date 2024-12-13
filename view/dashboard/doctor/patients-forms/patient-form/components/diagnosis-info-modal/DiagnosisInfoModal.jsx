import Image from "@/components/image";
import React from "react";

function DiagnosisInfoModal({ selectedDiagnosis }) {
  return (
    <div dir="ltr">
      {selectedDiagnosis?.ImageUrl ? (
        <Image
          src={selectedDiagnosis?.ImageUrl}
          alt="diagnosis-image"
          width={500}
          height={500}
        />
      ) : (
        <pre>
          {selectedDiagnosis && JSON.stringify(selectedDiagnosis, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default DiagnosisInfoModal;
