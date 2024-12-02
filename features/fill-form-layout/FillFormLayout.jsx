"use client";
import Input from "@/components/input";
import Modal from "@/components/modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useNotificationContext } from "@/utils/context/useNotificationContext";
import React, { useEffect, useRef, useState } from "react";
import ModalContent from "@/view/dashboard/components/modal-content";
import Datepicker from "@/components/datepicker";
import SectionLayout from "@/view/dashboard/components/section-layout";
import classNames from "classnames";
import { isMobile } from "react-device-detect";
import MultiSelect from "@/components/multi-select-input";

function FillFormLayout({
  title,
  subTitle,
  formItems,
  initialValues,
  validationSchema,
  constants,
  api,
  onSuccess,
}) {
  const { state: authState, setToken } = useAuthContext();

  const { addNotification } = useNotificationContext();
  const [{ loading }, refetch] = api({ token: authState.token });
  const modalRef = useRef(null);

  const handleModalClose = () => modalRef.current.close();
  const handleModalOpen = () => modalRef.current.open();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data } = await refetch({ data: values });

      if (data?.token) setToken(data?.token);
      handleModalOpen();

      addNotification({
        id: Date.now(),
        type: "success",
        message: constants.formModalCompleted,
      });

      onSuccess?.(values);
    } catch (error) {
      addNotification({
        id: Date.now(),
        type: "error",
        message: error.message || constants.fillFormError,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, values, submitForm, isValid }) => (
        <SectionLayout
          title={title}
          subTitle={subTitle}
          handleSubmit={submitForm}
          loading={isSubmitting || loading}
        >
          <Form className="grid grid-cols-4 gap-6">
            {formItems.map((item) => {
              if (item.condition && !item.condition(values)) {
                return null;
              }

              const colSpanClass = {
                "1/4": "col-span-1",
                "1/2": "col-span-2",
                full: "col-span-4",
              }[item.width];

              return (
                <div
                  key={item.key}
                  className={classNames(
                    "flex flex-col gap-1",
                    isMobile ? "col-span-4" : colSpanClass,
                  )}
                >
                  <label className="mb-2 font-medium">{item.label}</label>
                  {item.type === "date" ? (
                    <Datepicker
                      value={values[item.key]}
                      onChange={(date) =>
                        setFieldValue(item.key, date.toDate())
                      }
                      placeholder={item.placeholder}
                    />
                  ) : item.type === "radio" ? (
                    <div className="flex gap-6">
                      {item.options.map((option) => (
                        <label key={option.label} className="flex gap-2">
                          <Field
                            type="radio"
                            name={item.key}
                            value={option.value}
                            checked={
                              String(values[item.key]) === String(option.value)
                            }
                            as={Input}
                            onChange={() =>
                              setFieldValue(item.key, option.value)
                            }
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  ) : item.type === "checkbox" ? (
                    <div className="flex flex-wrap gap-6">
                      {item.options.map((option) => (
                        <label key={option} className="flex gap-2">
                          <Field
                            type="checkbox"
                            name={item.key}
                            value={option}
                            as={Input}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  ) : item.type === "select" ? (
                    <MultiSelect
                      options={item.options}
                      value={values[item.key] || []}
                      onChange={(selected) => setFieldValue(item.key, selected)}
                      placeholder={item.label}
                    />
                  ) : (
                    <Field
                      name={item.key}
                      as={Input}
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  )}
                  <ErrorMessage
                    name={item.key}
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
              );
            })}
          </Form>

          {/* Success Modal */}
          <Modal ref={modalRef}>
            <ModalContent
              title={constants.formModalCompleted}
              handleModalClose={handleModalClose}
            />
          </Modal>
        </SectionLayout>
      )}
    </Formik>
  );
}

export default FillFormLayout;
