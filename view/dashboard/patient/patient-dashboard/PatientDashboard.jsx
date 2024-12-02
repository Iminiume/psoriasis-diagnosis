"use client";
import React, { useEffect, useState } from "react";
import Image from "@/components/image";
import { useUserContext } from "@/utils/context/useUserContext";
import SuccessImage from "@/public/images/successImage.png";
import Typography from "@/components/typography";
import { Consts } from "./consts";
import Button from "@/components/button";
import Link from "next/link";
import convertToShamsiDate from "@/utils/convertToShamsiDate";

const StaticCards = ({ title, link = "#" }) => {
  return (
    <div className="bg-cardBg200 border-cardBorderOp30 flex flex-col gap-6 rounded-xl border p-6 shadow-lg">
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
  const [notification, setNotification] = useState(null);
  const { state } = useUserContext();

  const userData = state.userData;

  const handleArrangeData = (title, field) => {
    return Object.values(field || {})?.map((item) => {
      return {
        title: title,
        time_stamp: item?.CreatedAt,
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
      ),
      diagnosisByImage: handleArrangeData(
        Consts.diagnosisByImage,
        userData?.diagnosis_by_image,
      ),
      diagnosisByQuestionnaire: handleArrangeData(
        Consts.diagnosisByQuestionnaire,
        userData?.diagnosis_by_questionnaire,
      ),
    };

    const flattenedNotification = Object.values(notificationData).flatMap(
      (item) => item || [],
    );

    setNotification(flattenedNotification);
  }, [userData]);

  return (
    <div className="flex w-full flex-col items-center justify-start gap-12 text-center">
      <div className="border-cardBorderOp30 bg-cardBg200 flex w-full flex-col items-center justify-center gap-6 rounded-xl border px-6 py-8 shadow-lg">
        {userData && (
          <Image src={SuccessImage} alt="Success" className="object-contain" />
        )}
        <Typography weight="semibold" size="2xl">
          {userData ? Consts.congrats : Consts.noFile}
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography size="lg">
            {userData ? Consts.fileCreated : Consts.goMakeFile}
          </Typography>
          {userData && <Typography size="lg">{Consts.canContinue}</Typography>}
        </div>
      </div>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <StaticCards title={Consts.dieseaseType} />
        <StaticCards title={Consts.selfCare} />
      </div>

      {notification && (
        <div className="bg-cardBg100 border-cardBorderOp30 flex w-full flex-col items-start justify-start gap-6 rounded-xl border p-6 shadow-lg">
          <Typography weight="bold" size="2xl">
            {Consts.notificationTitle}
          </Typography>
          {notification?.map((item, index) => {
            const convertedDate = convertToShamsiDate(item?.time_stamp);

            return (
              <div
                className="bg-cardBg300 border-cardBorderOp10 flex w-full justify-between rounded-xl border p-6 shadow-lg"
                key={`notification-${index}`}
              >
                <Typography>{item?.title}</Typography>
                <Typography className="text-secondTextColor">
                  {convertedDate.timeStamp +
                    " - " +
                    convertedDate.formattedDate}
                </Typography>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PatientDashboard;
