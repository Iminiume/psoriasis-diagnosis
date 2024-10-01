"use client";
import { IconRenderer } from "@/app/components/icon/IconRenderer";
import { Text, Title } from "@/app/components/typography";
import Link from "next/link";
import React from "react";

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
};

const HoverText = ({ children }) => {
  return (
    <Text className={"hover:text-mainTextColor transition-colors"}>
      {children}
    </Text>
  );
};

const FooterCol = ({ title, itemsList }) => {
  return (
    <div className="text-mainTextColor col-span-1 flex flex-col gap-[20px] py-[50px]">
      <Title>{title}</Title>
      <div className="text-secondTextColor flex flex-col gap-[10px]">
        {itemsList.map((item) => {
          return (
            <div className="flex gap-[10px]">
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
                <HoverText>{item.title}</HoverText>
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
    <div className="mx-auto grid grid-flow-col gap-4 bg-white px-10 md:px-20 lg:px-[195px]">
      <FooterCol title={Texts.navigationTitle} itemsList={navigationStuffs} />
      <FooterCol title={Texts.policyTitle} itemsList={policyStuffs} />
      <FooterCol title={Texts.contactUsTitle} itemsList={contactUsStuffs} />
    </div>
  );
}

export default Footer;
