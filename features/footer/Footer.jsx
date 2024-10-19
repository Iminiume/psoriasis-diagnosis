"use client";
import React from "react";
import Link from "next/link";

import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
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
  <Typography size="lg" className="transition-colors hover:text-mainTextColor">
    {children}
  </Typography>
);

const FooterCol = ({ title, itemsList }) => (
  <div className="flex basis-1/5 flex-col items-center justify-center gap-[20px] lg:items-start">
    <Typography size="xl" className="text-mainTextColor">
      {title}
    </Typography>
    <div className="flex flex-col items-center justify-center gap-[10px] text-secondTextColor lg:items-start">
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
            <Typography size="lg">{item.title}</Typography>
          )}
        </div>
      ))}
    </div>
  </div>
);

function Footer() {
  return (
    <footer className="container relative mx-auto rounded-t-3xl bg-footerBg py-[70px] backdrop-blur-[10px]">
      <div className="flex flex-col items-center justify-center gap-4 px-8 lg:flex-row lg:items-start lg:justify-start lg:px-[124px]">
        <div className="flex basis-2/5 flex-col items-center gap-6 lg:items-start">
          <Image src={TextLogo} alt="text-logo" />
          <Typography size="sm" className="opacity-50">
            {Texts.detail}
          </Typography>
        </div>
        <FooterCol title={Texts.navigationTitle} itemsList={navigationLinks} />
        <FooterCol title={Texts.policyTitle} itemsList={policyLinks} />
        <FooterCol title={Texts.contactUsTitle} itemsList={contactDetails} />
      </div>
      <div className="absolute bottom-0 right-1/2 z-[-1] translate-x-1/2">
        <Image src={BlueShadowBottom} alt="blue-shadow" />
      </div>
    </footer>
  );
}

export default Footer;
