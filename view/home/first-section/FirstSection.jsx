import React from "react";
import Image from "@/components/image";
import Button from "@/components/button";
import Typography from "@/components/typography";

import BigLogo from "@/public/images/bigLogo.png";
import Stats from "@/public/images/stats.png";
import PinkShadow from "@/public/images/pinkShadow.png";
import VectorBG from "@/public/images/vector.png";
import SecondVectorBG from "@/public/images/vector2.png";

const Texts = {
  bigTitle: "همــــــــــــــــیار پسوریازیس",
  reserve: "همین حالا اقدام کن",
  moreInfo: "اطلاعات بیشتر",
};

function FirstSection() {
  return (
    <section
      className="relative px-8"
      style={{ height: "calc(100vh - 106px)" }}
    >
      <div className="mx-auto flex h-full max-w-custom items-center justify-center">
        {/* Text Box */}
        <div className="flex w-full basis-full flex-col items-center justify-center gap-6 pt-12 lg:basis-1/2">
          <Typography
            weight="bold"
            size="7xl"
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

        {/* Image Box */}
        <div className="hidden h-full basis-1/2 lg:flex lg:items-center lg:justify-center">
          <div className="relative h-[534px] w-full">
            <Image
              alt="big-logo"
              src={BigLogo}
              className="absolute right-[9rem] top-[6rem] z-20"
            />
            <Image
              alt="second-vector-bg"
              src={SecondVectorBG}
              className="absolute right-[8rem] top-[10rem] z-10"
            />
          </div>
        </div>
      </div>

      {/* Background Shadows */}
      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow} />
      </div>
    </section>
  );
}

export default FirstSection;
