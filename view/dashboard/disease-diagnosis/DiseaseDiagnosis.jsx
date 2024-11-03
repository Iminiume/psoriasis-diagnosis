"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import { TwoDigitNumber } from "@/utils/twoDigit";
import React, { useRef, useState } from "react";
import ModalContent from "../components/modal-content";
import { Consts, FormItems } from "./consts";
import DashboardRenderer from "../components/dashboard-renderer/DashboardRenderer";

function DiseaseDiagnosis() {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(FormItems.length).fill(null),
  );
  const [isFormComplete, setIsFormComplete] = useState(false);
  const modalRef = useRef();
  const [formPercentage, setFormPercentage] = useState(null);

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  const handleChange = (index, value) => {
    const updatedAnswers = selectedAnswers.map((answer, i) =>
      i === index ? value : answer,
    );
    setSelectedAnswers(updatedAnswers);

    setIsFormComplete(updatedAnswers.every((answer) => answer !== null));
  };

  const handleSubmit = () => {
    const yesCount = selectedAnswers.filter((answer) => answer === true).length;
    setFormPercentage((yesCount / FormItems.length) * 100);
    handleModalOpen();
  };

  const MakeFormRow = ({ item, index }) => {
    return (
      <div className="flex min-h-[80px] items-center justify-between gap-6 border-t border-[#737373] p-4">
        <div className="flex gap-6">
          <span className="w-[40px] text-center">
            <Typography size="2xl">{TwoDigitNumber(index + 1)}</Typography>
          </span>
          <Typography size="2xl">{item.title}</Typography>
        </div>
        <div className="flex gap-8">
          <Input
            type="radio"
            name={`question-${index}`}
            checked={selectedAnswers[index] === true}
            onChange={() => handleChange(index, true)}
            className="cursor-pointer"
          />
          <Input
            type="radio"
            name={`question-${index}`}
            checked={selectedAnswers[index] === false}
            onChange={() => handleChange(index, false)}
            className="cursor-pointer"
          />
        </div>
      </div>
    );
  };

  const handleModaContent = () => {
    if (!formPercentage) return;
    return (
      <ModalContent
        title={
          Consts.diagnosis + " " + formPercentage + " " + Consts.percentage
        }
        handleModalClose={handleModalClose}
        mainSubtitle={
          formPercentage > 18.75 ? Consts.isAfflicted : Consts.notAfflicted
        }
        secondSubtitle={Consts.confirmIsOnDoctor}
      />
    );
  };

  return (
    <DashboardRenderer
      title={Consts.title}
      subTitle={Consts.subTitle}
      handleSubmit={handleSubmit}
      isButtonDisabled={!isFormComplete}
    >
      <div className="flex w-full justify-end gap-10 px-5 py-2">
        <Typography size="lg">{Consts.yes}</Typography>
        <Typography size="lg">{Consts.no}</Typography>
      </div>
      {FormItems.map((item, index) => (
        <MakeFormRow key={index} item={item} index={index} />
      ))}
      <Modal ref={modalRef}>{handleModaContent()}</Modal>
    </DashboardRenderer>
  );
}

export default DiseaseDiagnosis;
