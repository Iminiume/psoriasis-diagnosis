import React from "react";
import Image from "@/components/image";
import SecondThumbnail from "@/public/images/thumbSection2.png";
import BlueShadow from "@/public/images/blueShadow.png";
import Typography from "@/components/typography";
import TitleIndicator from "@/components/title-indicator";

const Texts = {
  title: "تخمین و تشخیص بیماری",
  description:
    "ما با استفاده از اطلاعات شما و با نظر پزشک متخصص میزان ابتلا به پسوریازیس را تخمین میزنیم و نوع پسوریازیس را تعیین میکنیم.",
};

function SecondSection() {
  return (
    <section className="relative px-8 py-[8rem]">
      <div className="mx-auto flex max-w-custom flex-col gap-[4rem] lg:flex-row">
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
          <Typography size="2xl" className="text-center lg:text-start">
            {Texts.description}
          </Typography>
        </div>
      </div>

      {/* Background Shadow */}
      <div className="absolute left-0 top-0 z-[-1] -translate-y-[30%]">
        <Image src={BlueShadow} alt="blue-shadow" />
      </div>
    </section>
  );
}

export default SecondSection;
