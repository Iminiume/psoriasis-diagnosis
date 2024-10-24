import React from "react";
import Typography from "@/components/typography";
import Image from "@/components/image";
import classNames from "classnames";
import IconRenderer from "@/components/icon/IconRenderer";
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
    title: "انواع توصیه های عمومی بیماران پسوریازیس",
    iconImage: IconGlass,
    color: "orangeColor",
    link: "/",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "لیست انواع درمان های مختلف بیماری پسوریازیس",
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
    <section className="relative px-8 py-[8rem]" id="public-service">
      <div className="mx-auto flex max-w-custom flex-col gap-[4.2rem]">
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
                <Typography size="2xl" className="text-center">
                  {item.title}
                </Typography>
                <Typography className="text-center">
                  {item.description}
                </Typography>
              </div>

              <Link
                href={item.link}
                className={classNames(
                  colorClasses[item.color],
                  "flex items-center justify-center gap-1",
                )}
              >
                <Typography>{Texts.more}</Typography>
                <IconRenderer icon="arrowLeft" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
