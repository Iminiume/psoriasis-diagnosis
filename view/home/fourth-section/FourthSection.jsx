import { Text, Title } from "@/components/typography";
import React from "react";
import IconGlass from "@/public/images/iconImage.png";
import Image from "@/components/image";
import classNames from "classnames";
import { IconRenderer } from "@/components/icon/IconRenderer";
import Link from "next/link";
import TitleIndicator from "@/components/title-indicator";

const Texts = {
  title: "خدمات عمومی ما",
  more: "بیشتر",
};

const cards = [
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "greenColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "orangeColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "darkPinkColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

const colorClasses = {
  greenColor: "text-greenColor",
  orangeColor: "text-orangeColor",
  darkPinkColor: "text-darkPinkColor",
};

function FourthSection() {
  return (
    <div className="mx-auto py-[8rem]">
      <div className="flex flex-col gap-[58px]">
        <div className="flex items-center justify-center">
          <TitleIndicator color={"green"}>{Texts.title}</TitleIndicator>
        </div>

        <div className="z-30 flex justify-between gap-8">
          {cards.map((item) => (
            <div className="flex basis-1/3 flex-col items-center justify-center gap-8 rounded-[2rem] bg-cardBg px-6 py-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image src={item?.iconImage} />
                <Title className={"text-2xl"}>{item?.title}</Title>
                <Text className={"text-center text-[1rem] leading-6"}>
                  {item?.description}
                </Text>
              </div>

              <Link
                href={"/"}
                className={classNames(
                  colorClasses[item?.color],
                  "flex items-center justify-center gap-1",
                )}
              >
                <Text className="text-[18px]">{Texts.more}</Text>
                <IconRenderer icon={"arrowLeft"} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
