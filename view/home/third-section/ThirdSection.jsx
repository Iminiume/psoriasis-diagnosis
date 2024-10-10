import Image from "@/components/image";
import React from "react";
import { Text, Title } from "@/components/typography";
import BigPinkShadow from "@/public/images/bigPinkShadow.png";
import ThirdThumbnail from "@/public/images/thumbSection3.png";
import Button from "@/components/button";
import TextIndicator from "@/components/title-indicator/TitleIndicator";

const Texts = {
  title: "تشخیص بیماری، پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم. ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم. ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران  کمک می‌کنیم.",

  reserveNow: "همین حالا مشاوره بگیر",
  moreInfo: "اطلاعات بیشتر",
};

function ThirdSection() {
  return (
    <div className="mx-auto py-[8rem]">
      <div className="flex gap-[4rem]">
        {/* Text Box */}
        <div className="flex basis-3/4 flex-col gap-[4rem]">
          <TextIndicator color={"primary"}>{Texts.title}</TextIndicator>

          <Text className={"text-[1.5rem]"}>{Texts.description}</Text>
          <div className="flex gap-6">
            <Button>{Texts.reserveNow}</Button>
            <Button mode="secondary">{Texts.moreInfo}</Button>
          </div>
        </div>

        {/* Image Box */}
        <div className="basis-1/4">
          <Image src={ThirdThumbnail} />
        </div>
      </div>

      {/* Background Shadow */}
      <div className="absolute right-0 top-[80rem] z-[-1]">
        <Image src={BigPinkShadow} />
      </div>
    </div>
  );
}

export default ThirdSection;
