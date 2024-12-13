import SectionLayout from "@/view/dashboard/components/section-layout";
import React, { useEffect, useRef, useState } from "react";
import { Consts } from "./consts";
import Typography from "@/components/typography";
import DoctorAPI from "@/api/doctor";
import { useAuthContext } from "@/utils/context/useAuthContext";
import Modal from "@/components/modal";
import { GenderEnum, GenderEnumFa } from "@/utils/enum/gender-enum";
import convertToShamsiDate from "@/utils/convertToShamsiDate";
import { isObjectEmpty } from "@/utils/object";
import DiagnosisRow from "./components/diagnosis-row";
import CommentModal from "./components/comment-modal";
import DiagnosisInfoModal from "./components/diagnosis-info-modal";

function PatientForm({ data, slug }) {
  const { state } = useAuthContext();
  const [patient, setPatient] = useState(null);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);
  const [comment, setComment] = useState("");
  const [selectedDiagnosisType, setSelectedDiagnosisType] = useState([]);
  const [isVerifiedByDoctor, setIsVerifiedByDoctor] = useState(false);

  const modalRef = useRef(null);
  const infoModalRef = useRef(null);

  const [{ data: addCommentData, loading }, refetch] = DoctorAPI.AddComment({
    token: state.token,
  });

  useEffect(() => setPatient(data), [data]);

  const handleModalClose = () => modalRef.current.close();

  const handleModalOpen = (diagnosis) => {
    setSelectedDiagnosis(diagnosis);
    setComment("");
    setSelectedDiagnosisType([]);
    setIsVerifiedByDoctor(false);
    modalRef.current.open();
  };

  const handleInfoModalOpen = (content) => {
    setSelectedDiagnosis(content);
    infoModalRef.current.open();
  };

  const handleSubmitComment = async () => {
    if (!selectedDiagnosis?.[0] || !comment) {
      alert("Comment and diagnosis ID are required.");
      return;
    }

    const payload = {
      file_id: Number(selectedDiagnosis?.[0]),
      is_verified_by_doctor: isVerifiedByDoctor,
      doctor_comment: comment,
      doctor_diagnosis: selectedDiagnosisType.join(","),
    };

    try {
      refetch({ data: payload });
      handleModalClose();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const TextRow = ({ title, text }) => (
    <div className="flex gap-2">
      <Typography size="lg">{title}</Typography>
      <Typography size="lg">{text}</Typography>
    </div>
  );

  const MultiItemRow = ({ title, items }) => (
    <div className="flex flex-wrap gap-2">
      <Typography size="lg">{title}</Typography>
      {items.map((item, index) => (
        <Typography key={`item-${index}`} size="lg">
          {item}
          {index < items.length - 1 && ", "}
        </Typography>
      ))}
    </div>
  );

  if (!patient) return null;

  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex flex-col gap-12 pb-8">
        <div className="rounded-xl border border-[#ffffff30] bg-cardBg300 p-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <TextRow title={Consts.firstName} text={patient?.first_name} />
            <TextRow title={Consts.lastName} text={patient?.last_name} />
            <TextRow
              title={Consts.birthDate}
              text={
                convertToShamsiDate(patient?.birth_date).formattedDateInYear
              }
            />
            <TextRow
              title={Consts.gender}
              text={
                patient?.gender === GenderEnum.MALE
                  ? GenderEnumFa.MALE
                  : GenderEnumFa.FEMALE
              }
            />

            {patient?.gender === GenderEnum.FEMALE && (
              <>
                <TextRow
                  title={Consts.isBreastFeeding}
                  text={patient?.in_breastfeeding ? Consts.yes : Consts.no}
                />
                <TextRow
                  title={Consts.isPregnant}
                  text={patient?.is_pregnant ? Consts.yes : Consts.no}
                />
              </>
            )}

            <TextRow
              title={Consts.ageInFirstSigns}
              text={`${patient?.age_in_first_signs} ${Consts.age}`}
            />

            {patient?.treatments?.length > 0 && (
              <MultiItemRow
                title={Consts.treatments}
                items={patient.treatments}
              />
            )}

            {patient?.medicines?.length > 0 && (
              <MultiItemRow
                title={Consts.medicines}
                items={patient.medicines}
              />
            )}

            <TextRow title={Consts.insurance} text={patient?.insurance} />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {!isObjectEmpty(patient?.diagnosis_by_questionnaire) && (
            <DiagnosisRow
              title={Consts.diagnosisForm}
              diagnosis={patient?.diagnosis_by_questionnaire}
              handleModalOpen={handleModalOpen}
              handleInfoModalOpen={handleInfoModalOpen}
            />
          )}
          {!isObjectEmpty(patient?.diagnosis_by_form) && (
            <DiagnosisRow
              title={Consts.diagnosisType}
              diagnosis={patient?.diagnosis_by_form}
              handleModalOpen={handleModalOpen}
              handleInfoModalOpen={handleInfoModalOpen}
            />
          )}
          {!isObjectEmpty(patient?.diagnosis_by_image) && (
            <DiagnosisRow
              title={Consts.diagnosisImage}
              diagnosis={patient?.diagnosis_by_image}
              handleModalOpen={handleModalOpen}
              handleInfoModalOpen={handleInfoModalOpen}
            />
          )}
        </div>
      </div>

      <Modal title={Consts.commentModal} ref={modalRef}>
        <CommentModal
          selectedDiagnosis={selectedDiagnosis}
          selectedDiagnosisType={selectedDiagnosisType}
          setSelectedDiagnosisType={setSelectedDiagnosisType}
          handleSubmitComment={handleSubmitComment}
          comment={comment}
          setComment={setComment}
          isVerifiedByDoctor={isVerifiedByDoctor}
          setIsVerifiedByDoctor={setIsVerifiedByDoctor}
        />
      </Modal>

      <Modal ref={infoModalRef}>
        <DiagnosisInfoModal selectedDiagnosis={selectedDiagnosis} />
      </Modal>
    </SectionLayout>
  );
}

export default PatientForm;
