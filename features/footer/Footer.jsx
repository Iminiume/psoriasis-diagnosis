"use client";
import React from "react";
import Link from "next/link";

import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import Image from "@/components/image";

import BlueShadowBottom from "@/public/images/blueShadowBottom.png";
import { Consts, ContactDetails, NavigationLinks, PolicyLinks } from "./consts";
import Logo from "@/public/images/logo.png";

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
            <Typography size="lg" className="text-center lg:text-start">
              {item.title}
            </Typography>
          )}
        </div>
      ))}
    </div>
  </div>
);

function Footer() {
  return (
    <footer className="relative w-full rounded-t-3xl bg-footerBg py-[70px] backdrop-blur-[10px] border border-cardBorderOp10">
      <div className="flex flex-col items-center justify-center gap-4 px-8 lg:flex-row lg:items-start lg:justify-start lg:px-[124px]">
        <div className="flex basis-2/5 flex-col items-center gap-6 lg:items-start">
          <Image src={Logo} alt="text-logo" priority width={120} height={120} />
          <Typography
            size="sm"
            className="text-center opacity-50 lg:text-start"
          >
            {Consts.detail}
          </Typography>
        </div>
        <FooterCol title={Consts.navigationTitle} itemsList={NavigationLinks} />
        <FooterCol title={Consts.policyTitle} itemsList={PolicyLinks} />
        <FooterCol title={Consts.contactUsTitle} itemsList={ContactDetails} />
      </div>
      <div className="absolute bottom-0 right-1/2 z-[-1] translate-x-1/2">
        <Image src={BlueShadowBottom} alt="blue-shadow" />
      </div>
    </footer>
  );
}

export default Footer;
