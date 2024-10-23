import React from "react";
import Image from "@/components/image";
import Typography from "@/components/typography";
import BigPinkShadow from "@/public/images/bigPinkShadow.png";
import ThirdThumbnail from "@/public/images/thumbSection3.png";
import Button from "@/components/button";
import TitleIndicator from "@/components/title-indicator";
import { useRouter } from "next/navigation";

const Texts = {
  title: "تشخیص بیماری از روی تصویر",
  description:
    "ما با استفاده از هوش مصنوعی و تصویر ارسالی شما از موضع درگیر، نوع پسوریازیس شما را تشخیص می دهیم.",
  reserveNow: "همین حالا اقدام کن",
  moreInfo: "اطلاعات بیشتر",
};

function ThirdSection() {
  const router = useRouter();
  return (
    <section className="relative px-8 py-[8rem]">
      <div className="mx-auto flex max-w-custom flex-col gap-[4rem] lg:flex-row-reverse">
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
            <Button
              mode="secondary"
              onClick={() => router.push("/login/form?role=patient")}
            >
              {Texts.moreInfo}
            </Button>
          </div>
        </div>
      </div>
      {/* Background Shadow */}
      <div className="absolute right-0 top-0 z-[-1] -translate-y-[25%]">
        <Image src={BigPinkShadow} alt="Big Pink Shadow" />
      </div>
    </section>
  );
}

export default ThirdSection;
