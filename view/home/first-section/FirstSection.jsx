import React from "react";
import Image from "@/components/image";
import Button from "@/components/button";
import Typography from "@/components/typography";

import BigLogo from "@/public/images/logo.png";
import Vector from "@/public/images/vector.png";
import SecondVectorBG from "@/public/images/vector2.png";
import PinkShadow from "@/public/images/pinkShadow.png";

const Texts = {
  bigTitle: "همــــــــــــــــیار پسوریازیس",
  reserve: "همین حالا اقدام کن",
  moreInfo: "اطلاعات بیشتر",
};

function FirstSection() {
  return (
    <section className="relative h-[calc(100vh-106px)] px-8">
      <div className="mx-auto flex h-full max-w-custom items-center justify-center">
        <div className="flex w-full basis-full flex-col items-center justify-center gap-6 pt-12 lg:basis-1/2">
          <Typography
            weight="bold"
            size="6xl"
            className="text-center lg:text-start lg:text-[7rem]"
          >
            {Texts.bigTitle}
          </Typography>
          <div className="flex w-full items-center justify-center gap-6 lg:justify-start">
            <Button>
              <Typography>{Texts.reserve}</Typography>
            </Button>
            <Button mode="secondary">
              <Typography>{Texts.moreInfo}</Typography>
            </Button>
          </div>
        </div>

        <div className="hidden h-full basis-1/2 lg:flex lg:items-center lg:justify-center">
          <div className="relative flex h-full w-2/3 items-center justify-center">
            <Image
              alt="big-logo"
              src={BigLogo}
              className="absolute z-20"
              width={1080}
              height={1080}
            />
            <Image
              alt="second-vector-bg"
              src={SecondVectorBG}
              width={1080}
              height={1080}
              className="absolute z-10"
            />
          </div>
        </div>
      </div>

      {/* Background Shadows */}
      <div className="absolute right-0 top-[-105px] z-[-1]">
        <Image alt="vector" src={Vector} priority />
      </div>

      <div className="absolute right-0 top-[-105px] z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow} priority />
      </div>
    </section>
  );
}

export default FirstSection;
