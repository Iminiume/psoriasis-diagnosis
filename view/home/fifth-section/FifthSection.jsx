import React from "react";
import IconRenderer from "@/components/icon/IconRenderer";
import TitleIndicator from "@/components/title-indicator";
import Typography from "@/components/typography";
import Image from "@/components/image";
import Link from "next/link";
import classNames from "classnames";

import FirstCardImage from "@/public/images/cardImage1.png";
import OrangeShadow from "@/public/images/orangeShadow.png";

const cardsData = [
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    imageSrc: FirstCardImage,
    date: "29 آبان",
    isLandscape: false,
    link: "/",
  },
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    imageSrc: FirstCardImage,
    date: "29 آبان",
    isLandscape: true,
    link: "/",
  },
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    imageSrc: FirstCardImage,
    date: "29 آبان",
    isLandscape: true,
    link: "/",
  },
];

const Texts = {
  title: "آخرین مقالات این حوزه",
  showMore: "مشاهده همه",
};

const Card = ({ isLandscape, date, title, description, imageSrc }) => {
  return (
    <div
      className={classNames("flex", isLandscape ? "gap-6" : "flex-col gap-8")}
    >
      <div
        className={classNames(
          !isLandscape && "h-[268px] w-full overflow-hidden",
        )}
      >
        <Image src={imageSrc} alt={title} className="h-full w-full" />
      </div>
      <div className="flex basis-1/2 flex-col gap-3 text-wrap">
        <Typography className="text-orangeColor">{date}</Typography>
        <Typography size="2xl">{title}</Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
};

function FifthSection() {
  return (
    <div className="flex flex-col gap-8 px-8 py-[8rem]">
      <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
        <TitleIndicator color="orange">{Texts.title}</TitleIndicator>
        <Link className="flex items-center gap-2" href="/">
          <Typography size="2xl">{Texts.showMore}</Typography>
          <IconRenderer icon="arrowLeft" />
        </Link>
      </div>

      <div className="flex w-full flex-col gap-8 lg:flex-row">
        <div className="basis-1/2">
          <Link href={cardsData[0].link}>
            <Card {...cardsData[0]} />
          </Link>
        </div>
        <div className="flex basis-1/2 flex-col justify-between gap-8">
          {cardsData.slice(1).map((card, index) => (
            <Link key={index} href={card.link}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-[145rem] z-[-1]">
        <Image src={OrangeShadow} />
      </div>
    </div>
  );
}

export default FifthSection;
