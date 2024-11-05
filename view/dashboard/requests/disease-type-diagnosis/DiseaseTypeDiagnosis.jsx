"use client";
import PatientAPI from "@/api/patient";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { TwoDigitNumber } from "@/utils/twoDigit";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ModalContent from "../../components/modal-content";
import { Consts, FormItems, PsoriazisTypes } from "./consts";
import DashboardRenderer from "../../components/section-layout";

function DiseaseTypeDiagnosis() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const modalRef = useRef();
  const { state } = useAuthContext();

  const [{ data, error, loading }, refetch] = PatientAPI.DiagnosisType({
    formValues: selectedAnswers,
    token: state.token,
  });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    if (!loading && data && !error) handleModalOpen();
  }, [data, error, loading]);

  const handleChange = useCallback((questionKey, value) => {
    setSelectedAnswers((prevAnswers) => {
      let updatedAnswers = { ...prevAnswers };
      const isChecked = updatedAnswers[questionKey]?.includes(value);

      updatedAnswers[questionKey] = isChecked
        ? updatedAnswers[questionKey].filter((v) => v !== value)
        : [...(updatedAnswers[questionKey] || []), value];

      const isComplete = FormItems.every(
        (question) => updatedAnswers[question.value]?.length > 0,
      );
      setIsFormComplete(isComplete);

      return updatedAnswers;
    });
  }, []);

  const handleSubmit = () => {
    try {
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleModalContent = () => {
    if (!data) return;

    const diagnosisType = PsoriazisTypes.find(
      (type) => data.diagnosis === type.value,
    );

    return (
      <ModalContent
        title={
          diagnosisType
            ? `${Consts.systemRecommendation} ${diagnosisType.title} ${Consts.is}`
            : Consts.notDeterminedFa
        }
        mainSubtitle={Consts.shouldCheckedByDoctor}
        handleModalClose={handleModalClose}
      />
    );
  };

  const MakeFormRow = ({ item, index }) => {
    return (
      <div className="flex min-h-[156px] flex-col items-start justify-center gap-6 border-t border-[#737373] p-4">
        <div className="flex gap-6">
          <span className="w-[40px] text-center">
            <Typography size="2xl">{TwoDigitNumber(index + 1)}</Typography>
          </span>
          <Typography size="2xl">{item.title}</Typography>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {item.items.map((itemInputs) => {
            return (
              <div
                className="col-span-1 flex flex-row items-center justify-start gap-8"
                key={itemInputs.value}
              >
                <Input
                  type="checkbox"
                  className="cursor-pointer"
                  onClick={() => handleChange(item.value, itemInputs.value)}
                  checked={selectedAnswers[item.value]?.includes(
                    itemInputs.value,
                  )}
                />
                <Typography size="lg">{itemInputs.title}</Typography>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <DashboardRenderer
      title={Consts.title}
      subTitle={Consts.subTitle}
      isButtonDisabled={!isFormComplete || loading}
      handleSubmit={handleSubmit}
      loading={loading}
    >
      {FormItems.map((item, index) => (
        <MakeFormRow key={index} item={item} index={index} />
      ))}
      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </DashboardRenderer>
  );
}

export default DiseaseTypeDiagnosis;
