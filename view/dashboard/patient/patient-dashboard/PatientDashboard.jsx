"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "@/components/image";
import { useUserContext } from "@/utils/context/useUserContext";
import SuccessImage from "@/public/images/successImage.png";
import Typography from "@/components/typography";
import { Consts } from "./consts";
import Button from "@/components/button";
import Link from "next/link";
import convertToShamsiDate from "@/utils/convertToShamsiDate";
import Modal from "@/components/modal";
import classNames from "classnames";
import DiagnosisInfoModal from "../../doctor/patients-forms/patient-form/components/diagnosis-info-modal";

const StaticCards = ({ title, link = "#" }) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-cardBorderOp30 bg-cardBg200 p-6 shadow-lg">
      <Typography size="xl" weight="semibold">
        {title}
      </Typography>
      <Link href={link}>
        <Button className="w-full">
          <Typography size="md">{Consts.click}</Typography>
        </Button>
      </Link>
    </div>
  );
};

function PatientDashboard() {
  const { state } = useUserContext();
  const modalRef = useRef();
  const infoModalRef = useRef();
  const [notification, setNotification] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState();

  const userData = state.userData;
  const userRole = state.role;

  const handleModalOpen = (comment) => {
    setModalContent(comment);
    modalRef?.current?.open();
  };

  const handleInfoModalOpen = (diagnosis) => {
    setSelectedDiagnosis(diagnosis);
    infoModalRef?.current?.open();
  };

  const handleArrangeData = (title, field, isDiagnosis) => {
    return Object.values(field || {})?.map((item) => {
      return {
        title: title,
        time_stamp: item?.CreatedAt,
        ...(isDiagnosis && { diagnosis: item }),
      };
    });
  };

  useEffect(() => {
    const notificationData = {
      profileUpdates: userData?.profile_updates.map((update) => ({
        title: Consts.profileUpdate,
        time_stamp: update,
      })),

      diagnosisByForm: handleArrangeData(
        Consts.diagnosisByForm,
        userData?.diagnosis_by_form,
        true,
      ),
      diagnosisByImage: handleArrangeData(
        Consts.diagnosisByImage,
        userData?.diagnosis_by_image,
        true,
      ),
      diagnosisByQuestionnaire: handleArrangeData(
        Consts.diagnosisByQuestionnaire,
        userData?.diagnosis_by_questionnaire,
        true,
      ),
    };

    const flattenedNotification = Object.values(notificationData).flatMap(
      (item) => item || [],
    );

    const sortedNotifications = flattenedNotification?.sort((a, b) => {
      return new Date(b.time_stamp) - new Date(a.time_stamp);
    });

    setNotification(sortedNotifications);
  }, [userData]);

  const RenderCommentModal = () => {
    return (
      <div className="flex min-w-[350px] flex-col gap-6">
        <div className="flex flex-col gap-2">
          {modalContent?.map((item, index, array) => (
            <div
              key={`comment-${index}`}
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
              </Typography>{" "}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-start gap-12 text-center">
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-cardBorderOp30 bg-[#268bff7c] px-6 py-8 shadow-lg">
        {userData && (
          <Image
            src={SuccessImage}
            alt="Success"
            className="rounded-full border border-cardBorderOp30 object-contain"
          />
        )}
        <Typography weight="semibold" size="2xl">
          {userData ? Consts.congrats : Consts.noFile}
        </Typography>
        <div className="flex flex-col gap-4">
          <Typography size="lg">
            {userData ? Consts.fileCreated : Consts.goMakeFile}
          </Typography>
          {userData && <Typography size="lg">{Consts.canContinue}</Typography>}
          {!userRole && (
            <Link href={"/dashboard/patient/fill-form"}>
              <Button>{Consts.createFile}</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <StaticCards
          title={Consts.createOrChangeForm}
          link="/dashboard/patient/fill-form"
        />
        <StaticCards
          title={Consts.myRequests}
          link="/dashboard/patient/requests"
        />
      </div>

      {notification?.length > 0 && (
        <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-cardBorderOp30 bg-cardBg100 p-6 shadow-lg">
          <Typography weight="bold" size="2xl">
            {Consts.notificationTitle}
          </Typography>
          {notification?.map((item, index) => {
            const convertedDate = convertToShamsiDate(item?.time_stamp);
            return (
              <div
                className={classNames(
                  "flex w-full flex-col items-center justify-between gap-4 rounded-xl border p-6 shadow-lg lg:flex-row",
                  item?.diagnosis?.Comments?.length > 0
                    ? "border-cardBorderOp30 bg-greenColor"
                    : "border-cardBorderOp10 bg-cardBg300",
                )}
                key={`notification-${index}`}
              >
                <div className="flex w-full justify-between">
                  <Typography>{item?.title}</Typography>
                  <Typography>
                    {convertedDate.timeStamp +
                      " - " +
                      convertedDate.formattedDate}
                  </Typography>
                </div>

                <div className="flex items-center gap-4">
                  {item?.diagnosis && (
                    <Button
                      onClick={() => handleInfoModalOpen(item?.diagnosis)}
                    >
                      <Typography size="sm" className="text-nowrap">
                        {Consts.seeFormInfo}
                      </Typography>
                    </Button>
                  )}
                  {item?.diagnosis?.Comments?.length > 0 && (
                    <Button
                      onClick={() => handleModalOpen(item?.diagnosis?.Comments)}
                    >
                      <Typography className="text-nowrap" size="sm">
                        {Consts.seeDoctorComment}
                      </Typography>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal ref={modalRef} title={Consts.doctorComments}>
        <RenderCommentModal />
      </Modal>
      <Modal ref={infoModalRef}>
        <DiagnosisInfoModal selectedDiagnosis={selectedDiagnosis} />
      </Modal>
    </div>
  );
}

export default PatientDashboard;
