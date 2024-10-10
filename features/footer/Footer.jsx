"use client";
import React from "react";
import Link from "next/link";

import { IconRenderer } from "@/components/icon/IconRenderer";
import { Text, Title } from "@/components/typography";
import Image from "@/components/image";

import TextLogo from "@/public/images/textLogo.png";
import BlueShadowBottom from "@/public/images/blueShadowBottom.png";

const navigationLinks = [
  { title: "وبلاگ", link: "/blog" },
  { title: "نقشه", link: "/map" },
  { title: "درباره ما", link: "/about-us" },
  { title: "تماس با ما", link: "/contact-us" },
];

const policyLinks = [
  { title: "حریم خصوصی", link: "/policy" },
  { title: "سوالات متداول", link: "/qa" },
  { title: "درباره ما", link: "/about-us" },
  { title: "ثبت شکایت", link: "/nemidoonam" },
];

const contactDetails = [
  { title: "111222333", icon: "phone" },
  {
    title: "ایران،‌ تهران، خیابان ایرانشهر، کوچه صبوری، پلاک ۷، طبقه ۴",
    icon: "location",
  },
  { title: "Masourian@gmail.com", icon: "email" },
];

const Texts = {
  navigationTitle: "مراقبت کن",
  policyTitle: "حقوق و قوانین",
  contactUsTitle: "تماس با ما",
  detail:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
};

const HoverText = ({ children }) => (
  <Text className="text-lg transition-colors hover:text-mainTextColor">
    {children}
  </Text>
);

const FooterCol = ({ title, itemsList }) => (
  <div className="flex basis-1/5 flex-col gap-[20px]">
    <Title className="text-lg text-mainTextColor">{title}</Title>
    <div className="flex flex-col gap-[10px] text-secondTextColor">
      {itemsList.map((item, index) => (
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
            <Text className="text-lg">{item.title}</Text>
          )}
        </div>
      ))}
    </div>
  </div>
);

function Footer() {
  return (
    <div className="container relative mx-auto rounded-t-3xl bg-footerBg py-[70px] backdrop-blur-[10px]">
      <div className="flex items-start justify-start gap-4 px-[124px]">
        <div className="flex basis-2/5 flex-col gap-6">
          <Image src={TextLogo} alt="text-logo" />
          <Text className="text-sm opacity-50">{Texts.detail}</Text>
        </div>
        <FooterCol title={Texts.navigationTitle} itemsList={navigationLinks} />
        <FooterCol title={Texts.policyTitle} itemsList={policyLinks} />
        <FooterCol title={Texts.contactUsTitle} itemsList={contactDetails} />
      </div>
      <div className="absolute bottom-0 z-[-1]">
        <Image src={BlueShadowBottom} alt="blue-shadow" />
      </div>
    </div>
  );
}

export default Footer;
