import { IconRenderer } from "@/components/icon/IconRenderer";
import TitleIndicator from "@/components/title-indicator";
import { Text, Title } from "@/components/typography";
import Image from "@/components/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

import FirstCardImage from "@/public/images/cardImage1.png";
import OrangeShadow from "@/public/images/orangeShadow.png";

const cardsStuffs = [
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    Image: FirstCardImage,
    data: "29 آبان",
    isLandscape: false,
    link: "/",
  },
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    Image: FirstCardImage,
    data: "29 آبان",
    isLandscape: true,
    link: "/",
  },
  {
    title: "هوش مصنوعی و زندگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    Image: FirstCardImage,
    data: "29 آبان",
    isLandscape: true,
    link: "/",
  },
];

const Texts = {
  title: "آخرین مقالات این حوزه",
  showMore: "مشاهده همه",
};

const Card = ({
  isLandscape = true,
  date,
  title,
  description,
  imageSrc,
  key,
}) => {
  return (
    <div
      className={classNames("flex", isLandscape ? "gap-6" : "flex-col gap-8")}
      key={key}
    >
      <div
        className={classNames(
          !isLandscape && "h-[268px] w-full overflow-hidden",
        )}
      >
        <Image
          src={imageSrc}
          alt={`card-image-${key}`}
          className="h-full w-full"
        />
      </div>
      <div className="flex basis-1/2 flex-col gap-3 text-wrap">
        <Text className={"text-[1rem] text-orangeColor"}>{date}</Text>
        <Title className={"text-2xl"}>{title}</Title>
        <Text className={"text-[1rem]"}> {description}</Text>
      </div>
    </div>
  );
};

function FifthSection() {
  return (
    <div className="mx-auto w-full py-[8rem]">
      <div className="flex flex-col gap-8 px-8">
        <div className="z-30 flex w-full justify-between">
          <TitleIndicator color={"orange"}>{Texts.title}</TitleIndicator>
          <Link className="flex items-center gap-2" href={"/"}>
            <Text className={"text-2xl"}>{Texts.showMore}</Text>
            <IconRenderer icon={"arrowLeft"} />
          </Link>
        </div>
        <div className="z-30 flex w-full gap-8">
          <div className="basis-1/2">
            <Link href={cardsStuffs[0].link}>
              <Card
                date={cardsStuffs[0].data}
                imageSrc={cardsStuffs[0].Image}
                description={cardsStuffs[0].description}
                isLandscape={cardsStuffs[0].isLandscape}
                key={0}
                title={cardsStuffs[0].title}
              />
            </Link>
          </div>
          <div className="flex basis-1/2 flex-col justify-between gap-8">
            <Link href={cardsStuffs[0].link}>
              <Card
                date={cardsStuffs[1].data}
                imageSrc={cardsStuffs[1].Image}
                description={cardsStuffs[1].description}
                isLandscape={cardsStuffs[1].isLandscape}
                key={1}
                title={cardsStuffs[1].title}
              />
            </Link>
            <Link href={cardsStuffs[2].link}>
              <Card
                date={cardsStuffs[2].data}
                imageSrc={cardsStuffs[2].Image}
                description={cardsStuffs[2].description}
                isLandscape={cardsStuffs[2].isLandscape}
                key={2}
                title={cardsStuffs[2].title}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[145rem]">
        <Image src={OrangeShadow} />
      </div>
    </div>
  );
}

export default FifthSection;
