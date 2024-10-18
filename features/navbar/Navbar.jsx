"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import Button from "@/components/button";
import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import Image from "@/components/image";
import { useScrollPosition } from "@/utils/useScrollPosition";

import TextLogo from "@/public/images/textLogo.png";
import Logo from "@/public/images/logo.png";
import Drawer from "@/components/drawer";
import { useAuthContext } from "@/utils/useAuthContext";

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
  <Typography
    size="lg"
    className="text-secondTextColor transition-colors hover:text-mainTextColor"
  >
    {children}
  </Typography>
);

const LoginButton = ({ className }) => {
  return (
    <Link href="/login" className={className}>
      <Button mode="primary" className="flex items-center gap-6">
        <IconRenderer icon="user" />
        <Typography size="2xl" weight="medium">
          {Texts.comeIn}
        </Typography>
      </Button>
    </Link>
  );
};

const NavBarContent = ({ toggleMenu }) => (
  <>
    <div className="hidden items-center gap-8 lg:flex">
      {navbarItems.map((item, index) => (
        <Link href={item.link} key={`navbar-item-${index}`}>
          <HoverText>{item.title}</HoverText>
        </Link>
      ))}
    </div>

    <div className="lg:hidden">
      <Button onClick={toggleMenu}>
        <IconRenderer icon="burger" />
      </Button>
    </div>

    <LoginButton className={"hidden lg:block"} />
  </>
);

const NavbarDrawerContents = () => (
  <div className="flex min-w-[128px] flex-col items-center justify-center gap-8">
    {navbarItems.map((item, index) => (
      <Link href={item.link} key={`navbar-item-${index}`}>
        <HoverText>{item.title}</HoverText>
      </Link>
    ))}

    <LoginButton />
  </div>
);

function Navbar() {
  const drawerRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const { state, login } = useAuthContext();

  const isScrolled = scrollPosition > 48;

  const toggleMenu = () => {
    drawerRef.current.open();
  };

  return (
    <header
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
        <NavBarContent toggleMenu={toggleMenu} />
      </div>

      <Drawer ref={drawerRef} direction="left">
        <NavbarDrawerContents />
      </Drawer>
    </header>
  );
}

export default Navbar;
