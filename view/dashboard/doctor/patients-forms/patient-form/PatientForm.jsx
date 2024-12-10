import SectionLayout from "@/view/dashboard/components/section-layout";
import React, { useEffect, useRef, useState } from "react";
import { Consts } from "./consts";
import Typography from "@/components/typography";
import Image from "@/components/image";
import DoctorAPI from "@/api/doctor";
import { useAuthContext } from "@/utils/context/useAuthContext";
import Modal from "@/components/modal";
import ModalContent from "@/view/dashboard/components/modal-content";
import { GenderEnum, GenderEnumFa } from "@/utils/enum/gender-enum";
import convertToShamsiDate from "@/utils/convertToShamsiDate";
import Button from "@/components/button/Button";
import MultiSelect from "@/components/multi-select-input";
import Input from "@/components/input";
import { isObjectEmpty } from "@/utils/object";
import classNames from "classnames";

function PatientForm({ data, slug }) {
  const [patient, setPatient] = useState(null);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null);
  const { state } = useAuthContext();
  const modalRef = useRef(null);
  const [comment, setComment] = useState("");
  const [selectedDiagnosisType, setSelectedDiagnosisType] = useState([]);
  const [isVerifiedByDoctor, setIsVerifiedByDoctor] = useState(false);

  const [{ data: addCommentData, error, loading }, refetch] =
    DoctorAPI.AddComment({
      token: state.token,
    });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = (diagnosis) => {
    setSelectedDiagnosis(diagnosis);
    setComment(""); // Reset form fields
    setSelectedDiagnosisType([]);
    setIsVerifiedByDoctor(false);
    modalRef.current.open();
  };

  useEffect(() => {
    setPatient(data);
  }, [data]);

  const Text = ({ title, text }) => {
    return (
      <div className="flex gap-2">
        <Typography size="lg">{title}</Typography>
        <Typography size="lg">{text}</Typography>
      </div>
    );
  };

  const MultiItemText = ({ title, field }) => {
    return (
      <div className="flex flex-wrap gap-2">
        <Typography size="lg">{title}</Typography>
        {field.map((item, index) => (
          <Typography key={`treatment-${index}`} size="lg">
            {index + 1 === field?.length ? item : item + ", "}
          </Typography>
        ))}
      </div>
    );
  };

  const DiagnosisCard = ({ title, diagnosis }) => {
    return (
      <div className="flex w-full items-center justify-between rounded-xl border border-[#ffffff10] bg-[#252B42] p-4 shadow-lg">
        <Typography size="lg">{title}</Typography>
        <Button onClick={() => handleModalOpen(diagnosis)}>
          <Typography>{Consts.click}</Typography>
        </Button>
      </div>
    );
  };

  const handleSubmitComment = async () => {
    if (!selectedDiagnosis?.id || !comment) {
      alert("Comment and diagnosis ID are required.");
      return;
    }
    const payload = {
      file_id: Number(selectedDiagnosis.id),
      is_verified_by_doctor: isVerifiedByDoctor,
      doctor_comment: comment,
      doctor_diagnosis: selectedDiagnosisType.map((type) => type).join(","),
    };
    try {
      refetch({
        data: payload,
      });
      handleModalClose();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const getLatestDiagnosis = (diagnosisObj) => {
    return Object.entries(diagnosisObj).reduce((latest, [id, diagnosis]) => {
      return !latest || (Number(id) || 0) > (Number(latest.id) || 0)
        ? { id, diagnosis }
        : latest;
    }, null);
  };

  const renderModalContent = () => {
    return (
      <div className="flex min-w-[350px] flex-col gap-6">
        {selectedDiagnosis?.diagnosis?.Comments?.length > 0 ? (
          <div className="flex flex-col gap-2">
            {selectedDiagnosis?.diagnosis?.Comments.map(
              (item, index, array) => (
                <div key={index} className="flex">
                  <div
                    className={classNames(
                      "relative flex w-full flex-col gap-1 rounded-t-xl rounded-br-xl bg-[#194CC2] p-4",
                      index === array.length - 1
                        ? "before:absolute before:left-0 before:top-full before:border-r-[10px] before:border-t-[10px] before:border-r-transparent before:border-t-[#194CC2]"
                        : "rounded-bl-sm",
                    )}
                  >
                    <Typography size="md">
                      {Consts.comment + item?.Comment}
                    </Typography>
                    {item?.DoctorDiagnosis && (
                      <Typography size="md">
                        {Consts.diagnosisTypeByDoctor +
                          Consts.type +
                          " " +
                          item?.DoctorDiagnosis}
                      </Typography>
                    )}
                    <Typography size="md">
                      {item?.IsVerified
                        ? Consts.doctorVerified
                        : Consts.doctorDidnotVerified}
                    </Typography>
                  </div>
                </div>
              ),
            )}
          </div>
        ) : (
          <Typography size="md">{Consts.noComments} </Typography>
        )}

        <textarea
          className="w-full rounded border border-cardBorderOp30 bg-inputBg p-2"
          placeholder={Consts.enterCommentHere}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <MultiSelect
          options={diagnosisOptions}
          value={selectedDiagnosisType}
          onChange={(selected) => setSelectedDiagnosisType(selected)}
          placeholder={Consts.selectDiagnosisType}
        />

        <div className="flex items-center gap-2 text-center">
          <Input
            type="checkbox"
            checked={isVerifiedByDoctor}
            onChange={(e) => setIsVerifiedByDoctor(e.target.checked)}
          />
          <Typography size="md">{Consts.isVerified}</Typography>
        </div>

        <Button onClick={handleSubmitComment}>{Consts.addComment}</Button>
      </div>
    );
  };

  const latestQuestionnaireDiagnosis = getLatestDiagnosis(
    patient?.diagnosis_by_questionnaire || {},
  );
  const latestFormDiagnosis = getLatestDiagnosis(
    patient?.diagnosis_by_form || {},
  );
  const latestImageDiagnosis = getLatestDiagnosis(
    patient?.diagnosis_by_image || {},
  );

  const diagnosisOptions = ["A", "B", "C"];

  if (!patient) return null;

  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex flex-col justify-between gap-12 pb-8">
        <div className="flex justify-between rounded-xl border border-[#ffffff30] bg-cardBg300 p-6 shadow-lg">
          <div className="flex flex-col gap-4">
            <Text title={Consts.firstName} text={patient?.first_name} />
            <Text title={Consts.lastName} text={patient?.last_name} />
            <Text
              title={Consts.birthDate}
              text={
                convertToShamsiDate(patient?.birth_date).formattedDateInYear
              }
            />
            <Text
              title={Consts.gender}
              text={
                patient?.gender === GenderEnum.MALE
                  ? GenderEnumFa.MALE
                  : GenderEnumFa.FEMALE
              }
            />

            {patient?.gender === GenderEnum.FEMALE && (
              <Text
                title={Consts.isBreastFeeding}
                text={patient?.in_breastfeeding ? Consts.yes : Consts.no}
              />
            )}
            {patient?.gender === GenderEnum.FEMALE && (
              <Text
                title={Consts.isPregnant}
                text={patient?.is_pregnant ? Consts.yes : Consts.no}
              />
            )}
            <Text
              title={Consts.ageInFirstSigns}
              text={patient?.age_in_first_signs + " " + Consts.age}
            />
            {patient?.treatments && (
              <MultiItemText
                title={Consts.treatments}
                field={patient?.treatments}
              />
            )}
            {patient?.medicines && (
              <MultiItemText
                title={Consts.medicines}
                field={patient?.medicines}
              />
            )}
            <Text title={Consts.insurance} text={patient?.insurance} />
          </div>

          {patient?.ImageUrl && (
            <div className="flex gap-2 rounded">
              <Image
                src={patient?.ImageUrl}
                width={400}
                height={200}
                className="rounded"
                alt={"patient-image"}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          {!isObjectEmpty(patient?.diagnosis_by_questionnaire) && (
            <DiagnosisCard
              title={Consts.diagnosisForm}
              diagnosis={latestQuestionnaireDiagnosis}
            />
          )}
          {!isObjectEmpty(patient?.diagnosis_by_form) && (
            <DiagnosisCard
              title={Consts.diagnosisType}
              diagnosis={latestFormDiagnosis}
            />
          )}
          {!isObjectEmpty(patient?.diagnosis_by_image) && (
            <DiagnosisCard
              title={Consts.diagnosisImage}
              diagnosis={latestImageDiagnosis}
            />
          )}
        </div>
      </div>

      <Modal title={Consts.commentModal} ref={modalRef}>
        {selectedDiagnosis && renderModalContent()}
      </Modal>
    </SectionLayout>
  );
}

export default PatientForm;
