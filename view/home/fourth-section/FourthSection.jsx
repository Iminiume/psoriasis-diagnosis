"use client";
import React, { useRef } from "react";
import Typography from "@/components/typography";
import Image from "@/components/image";
import classNames from "classnames";
import IconRenderer from "@/components/icon/IconRenderer";
import Link from "next/link";
import TitleIndicator from "@/components/title-indicator";
import IconGlass from "@/public/images/iconImage.png";
import Modal from "@/components/modal";
import Button from "@/components/button";

const Texts = {
  title: "اطلاع رسانی",
  download: "دانلود",
  selectChoice: "گزینه مورد نظر خود را وارد کنید",
  enterPage: "ورود به صفحه",
  choose: "انتخاب گزینه‌ها",
};

const cards = [
  {
    title: "انواع بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "greenColor",
    link: "/disease-types",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "انواع توصیه های عمومی بیماران پسوریازیس",
    iconImage: IconGlass,
    color: "orangeColor",
    type: "modal",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "لیست انواع درمان های مختلف بیماری پسوریازیس",
    iconImage: IconGlass,
    color: "darkPinkColor",
    link: "/disease-treatments",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

const colorClasses = {
  greenColor: "text-greenColor",
  orangeColor: "text-orangeColor",
  darkPinkColor: "text-darkPinkColor",
};

const advices = [
  {
    title: "توصیه های ورزشی برای پسوریازیس",
    link: "/advices/exercise-advice",
  },
  {
    title: "توصیه های تغذیه ای برای پسوریازیس",
    link: "/advices/food-advice",
  },
  {
    title: "توصیه های روانشناسی ای برای پسوریازیس",
    link: "/advices/psychological-advice",
  },
];

function FourthSection() {
  const modalRef = useRef();

  const handleModalOpen = (index) => {
    modalRef.current.open(); // Open modal for the second card
  };

  const ModalContent = () => {
    return (
      <div className="flex w-full flex-col gap-4">
        {advices.map((item, index) => {
          return (
            <div
              className="flex w-full items-center justify-between gap-8"
              key={`content-item-modal-${index}`}
            >
              <Typography size="xl">{item.title}</Typography>
              <Link href={item.link}>
                <Button className="flex items-center gap-2">
                  <Typography>{Texts.enterPage}</Typography>
                  <IconRenderer icon="arrowLeft" />
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      className="relative bg-orangeShadow bg-contain bg-no-repeat px-8 py-[8rem]"
      id="public-service"
    >
      <div className="mx-auto flex max-w-custom flex-col gap-[4.2rem]">
        <div className="flex items-center justify-center">
          <TitleIndicator color="green">{Texts.title}</TitleIndicator>
        </div>

        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          {cards.map((item, index) => {
            return (
              <div
                key={index}
                className="flex basis-1/3 flex-col items-center justify-between gap-8 rounded-[2rem] bg-cardBg px-6 py-8"
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

                {item?.type === "modal" ? (
                  <div
                    className={classNames(
                      colorClasses[item.color],
                      "flex cursor-pointer items-center justify-center gap-1",
                    )}
                    onClick={handleModalOpen}
                  >
                    <Typography>{Texts.choose}</Typography>
                    <IconRenderer icon="arrowLeft" />
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={classNames(
                      colorClasses[item.color],
                      "flex items-center justify-center gap-1",
                    )}
                  >
                    <Typography>{Texts.enterPage}</Typography>
                    <IconRenderer icon="arrowLeft" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Modal ref={modalRef} title={Texts.selectChoice}>
        <ModalContent />
      </Modal>
    </section>
  );
}

export default FourthSection;
