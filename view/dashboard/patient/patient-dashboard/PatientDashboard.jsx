import Image from "@/components/image";
import { useUserContext } from "@/utils/context/useUserContext";
import React from "react";
import SuccessImage from "@/public/images/successImage.png";
import Typography from "@/components/typography";
import { Consts } from "./consts";
import Button from "@/components/button";
import Link from "next/link";
import ConvertToShamsiDate from "@/utils/convertToShamsiDate";

function PatientDashboard() {
  const { state } = useUserContext();

  const StaticCards = ({ title, link = "#" }) => {
    return (
      <div className="flex basis-1/2 flex-col gap-6 rounded-xl bg-[#26335D] p-6 shadow-lg">
        <Typography size="xl" weight="semibold">
          {title}
        </Typography>
        <Link href={link}>
          <Button className="w-full">{Consts.click}</Button>
        </Link>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-start gap-8 text-center">
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-[#26335D] px-6 py-8 shadow-lg">
        {state.userData && (
          <Image src={SuccessImage} alt="Success" className="object-contain" />
        )}
        <Typography weight="semibold" size="2xl">
          {state.userData ? Consts.congrats : Consts.noFile}
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography size="lg">
            {state.userData ? Consts.fileCreated : Consts.goMakeFile}
          </Typography>
          {state.userData && (
            <Typography size="lg">{Consts.canContinue}</Typography>
          )}
        </div>
      </div>

      <div className="flex w-full gap-8">
        <StaticCards title={Consts.dieseaseType} />
        <StaticCards title={Consts.selfCare} />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-6">
        {state.userData?.profile_updates.map((item, index) => {
          const convertedDate = ConvertToShamsiDate(item);
          return (
            <div
              className="flex w-full justify-between rounded-xl bg-[#26335D] p-6 shadow-lg"
              key={`profile-update-notification-${index}`}
            >
              <Typography>{Consts.profileUpdate}</Typography>
              <Typography className="text-secondTextColor">
                {convertedDate.timeStamp + " - " + convertedDate.formattedDate}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PatientDashboard;
