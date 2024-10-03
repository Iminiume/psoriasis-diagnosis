"use client";
import { IconRenderer } from "@/components/icon/IconRenderer";
import { Text, Title } from "@/components/typography";
import Image from "@/components/image";
import Link from "next/link";
import React from "react";
import TextLogo from "@/public/images/textLogo.png";

const navigationStuffs = [
  { title: "وبلاگ", link: "/blog" },
  { title: "نقشه", link: "/map" },
  { title: "درباره ما", link: "/about-us" },
  { title: "تماس با ما", link: "/contact-us" },
];

const policyStuffs = [
  { title: "حریم خصوصی", link: "/policy" },
  { title: "سوالات متداول", link: "/qa" },
  { title: "درباره ما", link: "/about-us" },
  { title: "ثبت شکایت", link: "/nemidoonam" },
];

const contactUsStuffs = [
  { title: "111222333", icon: "phone" },
  { title: "ایران،‌تهران، خ ایرانشهر، ک صبوری، پ ۷، ط ۴", icon: "location" },
  { title: "Masourian@gmail.com", icon: "email" },
];

const Texts = {
  navigationTitle: "مراقبت کن",
  policyTitle: "حقوق و قوانین",
  contactUsTitle: "تماس با ما",
  detail:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
};

const HoverText = ({ children }) => {
  return (
    <Text className={"text-lg transition-colors hover:text-mainTextColor"}>
      {children}
    </Text>
  );
};

const FooterCol = ({ title, itemsList }) => {
  return (
    <div className="flex basis-1/5 flex-col gap-[20px]">
      <Title className={"text-lg text-mainTextColor"}>{title}</Title>
      <div className="flex flex-col gap-[10px] text-secondTextColor">
        {itemsList.map((item, index) => {
          return (
            <div className="flex gap-[10px]" key={`footer-item-${index}`}>
              {item.icon && (
                <div className="text-primaryColor">
                  <IconRenderer icon={item.icon} />
                </div>
              )}
              {item.link ? (
                <Link href={item.link}>
                  <HoverText>{item.title}</HoverText>
                </Link>
              ) : (
                <Text className={"text-lg"}>{item.title}</Text>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Footer() {
  return (
    <div className="bg-footerBg mx-auto flex items-start justify-start gap-4 rounded-t-3xl px-[124px] py-[70px] backdrop-blur-[10px]">
      <div className="flex basis-2/5 flex-col gap-6">
        <Image src={TextLogo} alt="text-logo" />
        <Text className={"text-sm opacity-50"}>{Texts.detail}</Text>
      </div>
      <FooterCol title={Texts.navigationTitle} itemsList={navigationStuffs} />
      <FooterCol title={Texts.policyTitle} itemsList={policyStuffs} />
      <FooterCol title={Texts.contactUsTitle} itemsList={contactUsStuffs} />
    </div>
  );
}

export default Footer;
