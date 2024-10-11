import React from "react";
import Image from "@/components/image";
import Typography from "@/components/typography";
import BigPinkShadow from "@/public/images/bigPinkShadow.png";
import ThirdThumbnail from "@/public/images/thumbSection3.png";
import Button from "@/components/button";
import TitleIndicator from "@/components/title-indicator";

const Texts = {
  title: "تشخیص بیماری، پیشنهاد درمان",
  description:
    "ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران کمک می‌کنیم. ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران کمک می‌کنیم. ما با استفاده از هوش مصنوعی در تشخیص دقیق تر بیماری و توصیه های درمانی به پزشکان و بیماران کمک می‌کنیم.",
  reserveNow: "همین حالا مشاوره بگیر",
  moreInfo: "اطلاعات بیشتر",
};

function ThirdSection() {
  return (
    <div className="flex flex-col gap-[4rem] px-8 py-[8rem] lg:flex-row-reverse">
      {/* Image Box */}
      <div className="flex basis-1/4 items-center justify-center">
        <Image src={ThirdThumbnail} alt="Third Thumbnail" />
      </div>

      {/* Text Box */}
      <div className="flex basis-3/4 flex-col items-center gap-[4rem] lg:items-start">
        <TitleIndicator color="primary">{Texts.title}</TitleIndicator>
        <Typography size="2xl">{Texts.description}</Typography>
        <div className="flex gap-6">
          <Button>{Texts.reserveNow}</Button>
          <Button mode="secondary">{Texts.moreInfo}</Button>
        </div>
      </div>

      {/* Background Shadow */}
      <div className="absolute right-0 top-[80rem] z-[-1]">
        <Image src={BigPinkShadow} alt="Big Pink Shadow" />
      </div>
    </div>
  );
}

export default ThirdSection;
