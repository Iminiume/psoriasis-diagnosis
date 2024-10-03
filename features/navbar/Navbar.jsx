"use client";
import Button from "@/components/button";
import { IconRenderer } from "@/components/icon/IconRenderer";
import { Text } from "@/components/typography";
import Image from "@/components/image";
import Link from "next/link";
import React from "react";
import { useScrollPosition } from "@/utils/useScrollPosition";
import classNames from "classnames";

import TextLogo from "@/public/images/textLogo.png";
import Logo from "@/public/images/logo.png";

const navbarItems = [
  { title: "خانه", link: "/" },
  { title: "آموزش", link: "/learn" },
  { title: "توصیه", link: "/suggestions" },
  { title: "درباره ما", link: "/about-us" },
];

const Texts = { text: "مراقب باش", comeIn: "وارد شوید" };

const navClassNames = {
  notScrolled: "h-[106px]",
  scrolled:
    "to-[rgba(25, 31, 45, 0) 100%] h-[106px] bg-gradient-to-b from-background backdrop-blur-[12px]",
};

const imageClassNames = {
  notScrolled: "border border-primaryColor bg-background translate-y-[17%]",
  scrolled: "translate-y-[0%]",
};

const HoverText = ({ children }) => {
  return (
    <Text
      className={
        "text-lg text-secondTextColor transition-colors hover:text-mainTextColor"
      }
    >
      {children}
    </Text>
  );
};

function Navbar() {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={classNames(
        "sticky right-0 top-0 z-40 mx-auto flex w-full items-center justify-around gap-[40px] rounded-b-3xl",
        scrollPosition > 48
          ? navClassNames.scrolled
          : navClassNames.notScrolled,
      )}
    >
      <div className="top item flex justify-between gap-10">
        <Link href={"/"}>
          <div
            className={classNames(
              "rounded-bl-3xl px-6 py-4",
              scrollPosition > 48
                ? imageClassNames.scrolled
                : imageClassNames.notScrolled,
            )}
          >
            <Image
              src={scrollPosition > 48 ? Logo : TextLogo}
              alt="text-logo"
            />
          </div>
        </Link>

        <div className="flex items-center justify-center gap-8">
          {navbarItems.map((item) => (
            <Link href={item.link}>
              <HoverText>{item.title}</HoverText>
            </Link>
          ))}
        </div>
      </div>

      <Link href={"/login"}>
        <Button
          mode={"primary"}
          className={"flex items-center justify-center gap-6"}
        >
          <IconRenderer icon={"user"} />
          <Text className={"font-medium, text-2xl"}>{Texts.comeIn}</Text>
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
