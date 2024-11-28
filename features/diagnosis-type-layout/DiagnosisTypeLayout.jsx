"use client";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Typography from "@/components/typography";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ModalContent from "@/view/dashboard/components/modal-content";
import SectionLayout from "@/view/dashboard/components/section-layout";
import { useAuthContext } from "@/utils/context/useAuthContext";
function DiagnosisTypeLayout({
  title,
  subTitle,
  formItems,
  api,
  constants,
  userInfo,
  onSuccess,
  onError,
}) {
  const { state } = useAuthContext();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const modalRef = useRef();
  const [{ data, error, loading }, refetch] = api({ token: state.token });

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  useEffect(() => {
    if (!loading && data && !error) {
      handleModalOpen();
      onSuccess?.(data);
    }
  }, [data, error, loading]);

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error]);

  const handleChange = useCallback(
    (questionKey, value) => {
      setSelectedAnswers((prevAnswers) => {
        let updatedAnswers = { ...prevAnswers };
        const isChecked = updatedAnswers[questionKey]?.includes(value);

        updatedAnswers[questionKey] = isChecked
          ? updatedAnswers[questionKey].filter((v) => v !== value)
          : [...(updatedAnswers[questionKey] || []), value];

        const isComplete = formItems.every(
          (question) => updatedAnswers[question.value]?.length > 0,
        );
        setIsFormComplete(isComplete);

        return updatedAnswers;
      });
    },
    [formItems],
  );

  const handleSubmit = () => {
    const payload = {
      ...(userInfo && { user_info: userInfo }),
      diagnosis: selectedAnswers,
    };

    try {
      refetch({ data: payload });
    } catch (err) {
      onError?.(err);
    }
  };

  const MakeFormRow = ({ item, index }) => (
    <div className="flex min-h-[156px] flex-col items-start justify-center gap-6 border-t border-[#737373] p-4">
      <div className="flex gap-6">
        <span className="w-[40px] text-center">
          <Typography size="2xl">{index + 1}</Typography>
        </span>
        <Typography size="2xl">{item.title}</Typography>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {item.items.map((itemInputs) => (
          <div
            className="col-span-1 flex flex-row items-center justify-start gap-8"
            key={itemInputs.value}
          >
            <Input
              type="checkbox"
              className="cursor-pointer"
              onClick={() => handleChange(item.value, itemInputs.value)}
              checked={selectedAnswers[item.value]?.includes(itemInputs.value)}
            />
            <Typography size="lg">{itemInputs.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SectionLayout
      title={title}
      subTitle={subTitle}
      isButtonDisabled={!isFormComplete || loading}
      handleSubmit={handleSubmit}
      loading={loading}
    >
      {formItems.map((item, index) => (
        <MakeFormRow key={index} item={item} index={index} />
      ))}
      <Modal ref={modalRef}>
        <ModalContent
          title={constants.modalTitle(data)}
          mainSubtitle={constants.shouldCheckedByDoctor}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </SectionLayout>
  );
}

export default DiagnosisTypeLayout;
