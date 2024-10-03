import Image from "next/image";
import React from "react";
import SecondThumbnail from "@/public/images/thumbSection2.png";
import BlueShadow from "@/public/images/blueShadow.png";
import { Text, Title } from "@/components/typography";

const Texts = {
  title: "تشخیص بیماری، پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم",
};

function SecondSection() {
  return (
    <div className="flex gap-[4rem] py-[16rem]">
      {/* Image Box */}
      <div className="mx-auto basis-1/3">
        <Image
          alt="second-thumbnail"
          src={SecondThumbnail}
          className="rounded-[20px]"
        />
      </div>

      {/* Text Box */}
      <div className="flex w-full basis-2/3 flex-col items-start justify-start gap-8">
        <Title
          className={
            "relative text-[40px] before:absolute before:top-[4.5rem] before:w-[72px] before:border-[2px] before:border-secondaryColor"
          }
        >
          {Texts.title}
        </Title>
        <Text className={"text-2xl"}>{Texts.description}</Text>
      </div>

      {/* Background shadow */}
      <div className="absolute left-0 top-[20rem]">
        <Image src={BlueShadow} alt="blue-shadow" />
      </div>
    </div>
  );
}

export default SecondSection;
