import Image from "next/image";
import React from "react";
import FirstThumbnail from "@/public/images/thumb1.png";
import { Text, Title } from "@/app/components/typography";
import Button from "@/app/components/button";

const Texts = {
  smallTitle: "مبتلایان به پسوریازیس",
  bigTitle: "تشخیص بیماری،‌ پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم",
  reserve: "همین حالا مشاوره بگیر",
  moreInfo: "اطلاعات بیشتر",
};

function FirstSection() {
  return (
    <div className="container sm:flex sm:flex-col lg:grid lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-1">
      <div className="col-span-1 mx-auto">
        <Image src={FirstThumbnail} />
      </div>
      <div className="col-span-1 flex w-full flex-col items-start justify-center gap-[24px] lg:pr-[90px]">
        <div className="flex flex-col gap-[16px]">
          <Text className={"text-[20px] text-primaryColor"}>
            {Texts.smallTitle}
          </Text>
          <Title className={"text-[48px]"}>{Texts.bigTitle}</Title>
        </div>
        <Text className={"text-[24px]"}>{Texts.description}</Text>
        <div className="flex w-full items-center justify-center gap-[10px] lg:justify-start">
          <Button mode={"primary"}>{Texts.reserve}</Button>
          <Button>{Texts.moreInfo}</Button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
