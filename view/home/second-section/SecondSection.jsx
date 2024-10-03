import Image from "@/components/image";
import React from "react";
import SecondThumbnail from "@/public/images/thumbSection2.png";
import BlueShadow from "@/public/images/blueShadow.png";
import { Text, Title } from "@/components/typography";
import TitleIndicator from "@/components/title-indicator";

const Texts = {
  title: "تشخیص بیماری، پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم",
};

function SecondSection() {
  return (
    <div className="mx-auto py-[16rem]">
      <div className="flex gap-[4rem]">
        {/* Image Box */}
        <div className="mx-auto basis-1/3">
          <Image
            alt="second-thumbnail"
            src={SecondThumbnail}
            className="rounded-[20px]"
          />
        </div>

        {/* Text Box */}
        <div className="z-30 flex w-full basis-2/3 flex-col items-start justify-start gap-[4rem]">
          <TitleIndicator color={"blue"}>{Texts.title}</TitleIndicator>
          <Text className={"text-2xl"}>{Texts.description}</Text>
        </div>
      </div>

      {/* Background shadow */}
      <div className="absolute left-0 top-[20rem]">
        <Image src={BlueShadow} alt="blue-shadow" />
      </div>
    </div>
  );
}

export default SecondSection;
