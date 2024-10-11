import React from "react";
import { Text, Title } from "@/components/typography";
import Image from "@/components/image";
import classNames from "classnames";
import { IconRenderer } from "@/components/icon/IconRenderer";
import Link from "next/link";
import TitleIndicator from "@/components/title-indicator";
import IconGlass from "@/public/images/iconImage.png";

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
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "orangeColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "darkPinkColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

const colorClasses = {
  greenColor: "text-greenColor",
  orangeColor: "text-orangeColor",
  darkPinkColor: "text-darkPinkColor",
};

function FourthSection() {
  return (
    <div className="flex flex-col gap-[4.2rem] px-8 py-[8rem]">
      <div className="flex items-center justify-center">
        <TitleIndicator color="green">{Texts.title}</TitleIndicator>
      </div>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex basis-1/3 flex-col items-center justify-center gap-8 rounded-[2rem] bg-cardBg px-6 py-8"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <Image src={item.iconImage} alt={item.title} />
              <Title className="text-2xl">{item.title}</Title>
              <Text className="text-center text-[1rem] leading-6">
                {item.description}
              </Text>
            </div>

            <Link
              href={item.link}
              className={classNames(
                colorClasses[item.color],
                "flex items-center justify-center gap-1",
              )}
            >
              <Text className="text-[1rem]">{Texts.more}</Text>
              <IconRenderer icon="arrowLeft" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthSection;
