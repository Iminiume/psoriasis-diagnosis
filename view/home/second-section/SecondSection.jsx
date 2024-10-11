import React from "react";
import Image from "@/components/image";
import SecondThumbnail from "@/public/images/thumbSection2.png";
import BlueShadow from "@/public/images/blueShadow.png";
import { Text, Title } from "@/components/typography";
import TitleIndicator from "@/components/title-indicator";

const Texts = {
  title: "تشخیص بیماری، پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران کمک می‌کنیم",
};

function SecondSection() {
  return (
    <div className="flex flex-col gap-[4rem] px-8 py-[16rem] lg:flex-row">
      {/* Image Box */}
      <div className="mx-auto basis-1/3">
        <Image
          alt="second-thumbnail"
          src={SecondThumbnail}
          className="rounded-[20px]"
        />
      </div>

      {/* Text Box */}
      <div className="flex w-full basis-2/3 flex-col items-center justify-start gap-[4rem] lg:items-start">
        <TitleIndicator color="blue">{Texts.title}</TitleIndicator>
        <Text className="text-2xl">{Texts.description}</Text>
      </div>

      {/* Background Shadow */}
      <div className="absolute left-0 top-[20rem] z-[-1]">
        <Image src={BlueShadow} alt="blue-shadow" />
      </div>
    </div>
  );
}

export default SecondSection;
