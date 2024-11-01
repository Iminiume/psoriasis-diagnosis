"use client";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@/components/button";
import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import Image from "@/components/image";
import Drawer from "@/components/drawer";
import { useScrollPosition } from "@/utils/hooks/useScrollPosition";
import { useAuthContext } from "@/utils/context/useAuthContext";

import TextLogo from "@/public/images/textLogo.png";
import Logo from "@/public/images/logo.png";

const navbarItems = [
  { title: "خدمات عمومی", link: "/#public-service" },
  { title: "خدمات تخصصی بیماران", link: "/learn" },
  { title: "راهنمای سامانه", link: "/suggestions" },
  { title: "درباره ما", link: "/about-us" },
];

const Texts = { comeIn: "وارد شوید", logOut: "خروج" };

const navStyles = (isScrolled) =>
  classNames(
    "sticky right-0 top-0 z-40 mx-auto flex w-full max-w-custom items-center justify-around gap-10 rounded-b-3xl px-8",
    isScrolled
      ? "h-[106px] bg-gradient-to-b from-background to-[rgba(25, 31, 45, 0) 100%] backdrop-blur-[12px]"
      : "h-[106px]",
  );

const logoStyles = (isScrolled) =>
  classNames(
    "rounded-bl-3xl px-6 py-4",
    isScrolled
      ? "translate-y-0 h-[106px] w-[122px]"
      : "border border-primaryColor bg-background translate-y-[17%] h-[165px] w-[122px]",
  );

const HoverText = ({ children }) => (
  <Typography
    size="lg"
    className="text-secondTextColor transition-colors hover:text-mainTextColor"
  >
    {children}
  </Typography>
);

const NavbarItems = () =>
  navbarItems.map((item, index) => (
    <Link href={item.link} key={`navbar-item-${index}`}>
      <HoverText>{item.title}</HoverText>
    </Link>
  ));

const LoginButton = ({ isLoggedIn, onClick }) => (
  <Button mode="primary" className="flex items-center gap-6" onClick={onClick}>
    <IconRenderer icon={isLoggedIn ? "exit" : "user"} />
    <Typography size="2xl" weight="medium">
      {isLoggedIn ? Texts.logOut : Texts.comeIn}
    </Typography>
  </Button>
);

const LinkLoginButton = ({ isLoggedIn, href, onClick, className }) => (
  <Link href={href} className={className}>
    <LoginButton isLoggedIn={isLoggedIn} onClick={onClick} />
  </Link>
);

const NavBarContent = ({ toggleMenu, isLoggedIn, handleLogOut }) => (
  <>
    <div className="hidden items-center gap-8 lg:flex">
      <NavbarItems />
    </div>
    <div className="lg:hidden">
      <Button onClick={toggleMenu}>
        <IconRenderer icon="burger" />
      </Button>
    </div>
    <LinkLoginButton
      className="hidden lg:block"
      isLoggedIn={isLoggedIn}
      href={isLoggedIn ? "/" : "/login"}
      onClick={isLoggedIn ? handleLogOut : null}
    />
  </>
);

const NavbarDrawerContents = ({ isLoggedIn, handleLogOut }) => (
  <div className="flex min-w-[128px] flex-col items-center justify-center gap-8">
    <NavbarItems />
    <LinkLoginButton
      isLoggedIn={isLoggedIn}
      href={isLoggedIn ? "/" : "/login"}
      onClick={isLoggedIn ? handleLogOut : null}
    />
  </div>
);

function Navbar() {
  const drawerRef = useRef(null);

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 48;

  const { state, logout } = useAuthContext();
  const isLoggedIn = state?.token;

  const router = useRouter();

  const handleLogOut = () => {
    logout();
    if (router) {
      router.refresh(); // Only reload if the router is ready
    }
  };

  const toggleMenu = () => drawerRef.current?.open();

  return (
    <header className={navStyles(isScrolled)}>
      <Link href="/">
        <div className={logoStyles(isScrolled)}>
          <Image src={isScrolled ? Logo : TextLogo} alt="logo" />
        </div>
      </Link>

      <div className="flex w-full flex-row-reverse items-center justify-between gap-10 lg:flex-row">
        <NavBarContent
          toggleMenu={toggleMenu}
          isLoggedIn={isLoggedIn}
          handleLogOut={handleLogOut}
        />
      </div>

      <Drawer ref={drawerRef} direction="left">
        <NavbarDrawerContents
          isLoggedIn={isLoggedIn}
          handleLogOut={handleLogOut}
        />
      </Drawer>
    </header>
  );
}

export default Navbar;
