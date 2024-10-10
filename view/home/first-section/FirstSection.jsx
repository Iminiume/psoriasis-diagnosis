import React from "react";
import Image from "@/components/image";
import Button from "@/components/button";
import { Text, Title } from "@/components/typography";

import BigLogo from "@/public/images/bigLogo.png";
import Stats from "@/public/images/stats.png";
import PinkShadow from "@/public/images/pinkShadow.png";
import VectorBG from "@/public/images/vector.png";
import SecondVectorBG from "@/public/images/vector2.png";

const Texts = {
  smallTitle: "مبتلایان به پسوریازیس",
  bigTitle: "همــــــــــــــــیار پسوریازیس",
  reserve: "همین حالا مشاوره بگیر",
  moreInfo: "اطلاعات بیشتر",
};

function FirstSection() {
  return (
    <div className="mx-auto px-4 py-[12rem]">
      <div className="flex">
        {/* Text Box */}
        <div className="flex w-full basis-1/2 flex-col items-center justify-center gap-6 pt-12">
          <Title className="text-[100px]">{Texts.bigTitle}</Title>
          <div className="flex w-full items-center justify-start gap-6">
            <Button>
              <Text>{Texts.reserve}</Text>
            </Button>
            <Button mode="secondary">
              <Text>{Texts.moreInfo}</Text>
            </Button>
          </div>
        </div>

        {/* Image Box */}
        <div className="relative basis-1/2">
          <Image
            alt="big-logo"
            src={BigLogo}
            className="absolute right-[9rem] top-[6rem] z-20"
          />
          <Image
            alt="stats"
            src={Stats}
            className="absolute right-0 top-0 z-30"
          />
          <Image
            alt="second-vector-bg"
            src={SecondVectorBG}
            className="absolute right-[8rem] top-[10rem] z-10"
          />
        </div>
      </div>

      {/* Background Shadows */}
      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow} />
      </div>
      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="vector" src={VectorBG} />
      </div>
    </div>
  );
}

export default FirstSection;
