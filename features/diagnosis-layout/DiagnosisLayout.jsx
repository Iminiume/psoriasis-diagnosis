"use client";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import React, { useEffect, useRef, useState } from "react";
import SectionLayout from "@/view/dashboard/components/section-layout";
import ModalContent from "@/view/dashboard/components/modal-content";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import { useAuthContext } from "@/utils/context/useAuthContext";

function DiagnosisLayout({
  title,
  subTitle,
  formItems,
  constants,
  api,
  userInfo,
}) {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(formItems.length).fill(null),
  );
  const { state } = useAuthContext();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formResult, setFormResult] = useState(null);
  const modalRef = useRef();
  const [{ data, loading }, refetch] = api({ token: state.token });
  const { addNotification } = useNotificationContext();

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
    const responses = selectedAnswers.map((answer, index) => ({
      question: formItems[index].title,
      answer: answer ? constants.yes : constants.no,
    }));
    const payload = {
      ...(userInfo
        ? { user_info: userInfo, questionnaire: { responses } }
        : { responses }),
    };

    try {
      refetch({ data: payload });
    } catch (err) {
      addNotification({
        id: Date.now(),
        type: "success",
        message: err,
      });
    }
  };

  useEffect(() => {
    if (data) {
      const percentage = data?.percentageScore * 0.75;

      setFormResult({
        percentage: percentage,
        isAfflicted: percentage > 18.75,
      });
      handleModalOpen();
    }
  }, [data]);

  const handleModalContent = () => {
    if (!formResult) return null;

    return (
      <ModalContent
        title={
          constants.diagnosis +
          " " +
          formResult.percentage +
          " " +
          constants.percentage
        }
        handleModalClose={handleModalClose}
        mainSubtitle={
          formResult.isAfflicted
            ? constants.isAfflicted
            : constants.notAfflicted
        }
        secondSubtitle={constants.confirmIsOnDoctor}
      />
    );
  };

  const MakeFormRow = ({ item, index }) => (
    <div className="flex min-h-[80px] items-center justify-between gap-6 border-t border-[#737373] p-4">
      <div className="flex gap-6">
        <span className="w-[40px] text-center">
          <Typography size="2xl">{index + 1}</Typography>
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

  return (
    <SectionLayout
      title={title}
      subTitle={subTitle}
      handleSubmit={handleSubmit}
      isButtonDisabled={!isFormComplete || loading}
      loading={loading}
    >
      <div className="flex w-full justify-end gap-10 px-5 py-2">
        <Typography size="lg">{constants.yesFa}</Typography>
        <Typography size="lg">{constants.noFa}</Typography>
      </div>
      {formItems.map((item, index) => (
        <MakeFormRow key={index} item={item} index={index} />
      ))}
      <Modal ref={modalRef}>{handleModalContent()}</Modal>
    </SectionLayout>
  );
}

export default DiagnosisLayout;
