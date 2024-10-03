import { Text, Title } from "@/components/typography";
import React from "react";
import IconGlass from "@/public/images/iconImage.png";
import Image from "next/image";
import classNames from "classnames";
import { IconRenderer } from "@/components/icon/IconRenderer";
import Link from "next/link";

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
    color: "purpleColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

const colorClasses = {
  greenColor: "text-greenColor",
  orangeColor: "text-orangeColor",
  purpleColor: "text-purpleColor",
};

function FourthSection() {
  return (
    <div className="flex flex-col gap-[58px] py-[8rem]">
      <div className="flex items-center justify-center">
        <Text
          className={
            "before:border-greenColor relative text-[40px] before:absolute before:top-[4.5rem] before:w-[72px] before:border-[2px]"
          }
        >
          {Texts.title}
        </Text>
      </div>

      <div className="z-30 flex justify-between gap-8">
        {cards.map((item) => (
          <div className="bg-cardBg flex basis-1/3 flex-col items-center justify-center gap-8 rounded-[2rem] px-6 py-8">
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
  );
}

export default FourthSection;
