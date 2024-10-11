"use client";
import React from "react";
import Link from "next/link";
import classNames from "classnames";

import Button from "@/components/button";
import { IconRenderer } from "@/components/icon/IconRenderer";
import { Text } from "@/components/typography";
import Image from "@/components/image";
import { useScrollPosition } from "@/utils/useScrollPosition";

import TextLogo from "@/public/images/textLogo.png";
import Logo from "@/public/images/logo.png";

const navbarItems = [
  { title: "خانه", link: "/" },
  { title: "آموزش", link: "/learn" },
  { title: "توصیه", link: "/suggestions" },
  { title: "درباره ما", link: "/about-us" },
];

const Texts = { comeIn: "وارد شوید" };

const navClassNames = {
  notScrolled: "h-[106px]",
  scrolled:
    "h-[106px] bg-gradient-to-b from-background to-[rgba(25, 31, 45, 0) 100%] backdrop-blur-[12px]",
};

const imageClassNames = {
  notScrolled:
    "border border-primaryColor bg-background translate-y-[17%] h-[165px] w-[122px]",
  scrolled: "translate-y-0 h-[106px] w-[122px]",
};

const HoverText = ({ children }) => (
  <Text className="text-lg text-secondTextColor transition-colors hover:text-mainTextColor">
    {children}
  </Text>
);

function Navbar() {
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 48;

  return (
    <div
      className={classNames(
        "sticky right-0 top-0 z-40 mx-auto flex w-full max-w-custom items-center justify-around gap-10 rounded-b-3xl px-8",
        isScrolled ? navClassNames.scrolled : navClassNames.notScrolled,
      )}
    >
      <Link href="/">
        <div
          className={classNames(
            "rounded-bl-3xl px-6 py-4",
            isScrolled ? imageClassNames.scrolled : imageClassNames.notScrolled,
          )}
        >
          <Image src={isScrolled ? Logo : TextLogo} alt="logo" />
        </div>
      </Link>

      <div className="flex w-full flex-row-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="hidden items-center gap-8 lg:flex">
          {navbarItems.map((item, index) => (
            <Link href={item.link} key={`navbar-item-${index}`}>
              <HoverText>{item.title}</HoverText>
            </Link>
          ))}
        </div>

        <Link href="/login">
          <Button mode="primary" className="flex items-center gap-6">
            <IconRenderer icon="user" />
            <Text className="font-medium lg:text-2xl">{Texts.comeIn}</Text>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
