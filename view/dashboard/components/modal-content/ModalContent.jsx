import Button from "@/components/button";
import Typography from "@/components/typography";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Consts } from "./consts";
import IconRenderer from "@/components/icon/IconRenderer";
import Image from "@/components/image";
import SuccessImage from "@/public/images/successImage.png";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum } from "@/utils/enum/role-enum";

const ModalContent = ({
  title,
  mainSubtitle,
  secondSubtitle,
  handleModalClose,
}) => {
  const router = useRouter();
  const { state } = useUserContext();
  const { role } = state;
  const searchParams = useSearchParams();
  const referrer = searchParams.get("referrer");

  const handleButtonClick = () => {
    if (referrer) {
      router.replace(referrer);
    } else {
      router.replace(
        role === RoleEnum.PATIENT
          ? "/dashboard/patient/requests"
          : "/dashboard/doctor/requests",
      );
    }
  };

  return (
    <div className="flex min-w-[30rem] flex-col items-center justify-center gap-4">
      <div className="relative flex w-full items-center justify-center px-4">
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={handleModalClose}
        >
          <IconRenderer icon="xClose" />
        </div>
        <Image src={SuccessImage} alt="Success" className="object-contain" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 border-b border-[#737373] pb-6">
        <Typography size="xl" weight="bold" className="text-center">
          {title}
        </Typography>
        {mainSubtitle && (
          <Typography size="lg" className="text-center text-[#8D8D8D]">
            {mainSubtitle}
            {secondSubtitle && secondSubtitle}
          </Typography>
        )}
      </div>

      <div className="flex w-full justify-center gap-4 pt-4">
        <Button
          mode="primary"
          onClick={() => handleButtonClick()}
          className="basis-1/2"
        >
          {Consts.confirmAndContinue}
        </Button>
        <Button
          mode="secondary"
          onClick={handleModalClose}
          className="basis-1/2"
        >
          {Consts.close}
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
